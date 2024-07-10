import './SleepCalculator.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';

//components
import SelectElement from '../selectElement/SelectElement';
import CalculatedSleepParameters from '../calculatedSleepParameters/CalculatedSleepParameters';

// utilities
import CalculateSleepData, {
	SleepData,
} from '../../utilities/CalculateSleepData';

type CalculatorProps = {
	title: string;
	inputInfo: string;
	name: string;
};

export default function SleepCalculator({
	title,
	inputInfo,
	name,
}: CalculatorProps) {
	const navigate = useNavigate();
	const [sleepTime, setSleepTime] = useState({
		bedTimeHour: 0,
		bedTimeMinute: 0,
		wakeUpHour: 0,
		wakeUpMinute: 0,
	});
	const [sleepParameters, setSleepParameters] = useState<SleepData | null>(
		null
	);

	console.log(sleepTime)

	function handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
		const { name, value } = e.target;
		setSleepTime((prevState) => {
			return {
				...prevState,
				[name]: parseInt(value),
			};
		});
	}

	const generateOptions = (length: number, getValue: (i: number) => number) => {
		return Array.from({ length }, (_, i) => (
			<option key={i} value={getValue(i)}>
				{getValue(i).toString().padStart(2, '0')}
			</option>
		));
	};

	const selects = [
		{
			name: 'bedTimeHour',
			label: 'Hour',
			options: generateOptions(24, (i) => i),
			value: sleepTime.bedTimeHour,
		},
		{
			name: 'bedTimeMinute',
			label: 'Minute',
			options: generateOptions(12, (i) => i * 5),
			value: sleepTime.bedTimeMinute,
		},
		{
			name: 'wakeUpHour',
			label: 'Hour',
			options: generateOptions(24, (i) => i),
			value: sleepTime.wakeUpHour,
		},
		{
			name: 'wakeUpMinute',
			label: 'Minute',
			options: generateOptions(12, (i) => i * 5),
			value: sleepTime.wakeUpMinute,
		},
	];

	const handleCalculate = () => {
		const sleepData = CalculateSleepData(sleepTime);
		setSleepParameters(sleepData);
	  };

	const formatTime = (sleepParameters: SleepData, name: string) => {
		const hour =
			name === 'wakeUpTime'
				? sleepParameters.optimalWakeUpHour
				: sleepParameters.optimalBedTimeHour;
		const minute =
			name === 'wakeUpTime'
				? sleepParameters.optimalWakeUpMinute
				: sleepParameters.optimalBedTimeMinute;
		return `${(hour % 24).toString().padStart(2, '0')}:${minute
			.toString()
			.padStart(2, '0')}`;
	};

	return (
		<div className='calculator-container'>
			<h2 className='calculator-header'>{title}</h2>
			<p>
				Insert the <span className='input-info'>{inputInfo}</span> and we will
				count{' '}
				{name !== 'quality' && <span>the optimal sleep time as well as </span>}
				the sleep-related parameters.
			</p>

			<div className='calculator-form-container'>
				{name === 'quality' && (
					<div className='quality-sleep-container'>
						<div className='quality-sleep-container-content'>
							<p className='quality-sleep-container-label'>Bedtime</p>
							<div className='quality-sleep-container-item'>
								{selects.slice(0, 2).map((select) => (
									<SelectElement
										key={select.name}
										name={select.name}
										onChange={handleChange}
										options={select.options}
										label={select.label}
										value={select.value}
									/>
								))}
							</div>
						</div>
						<div className='quality-sleep-container-content'>
							<p className='quality-sleep-container-label'>Wake up Time</p>
							<div className='quality-sleep-container-item'>
								{selects.slice(2).map((select) => (
									<SelectElement
										key={select.name}
										name={select.name}
										onChange={handleChange}
										options={select.options}
										label={select.label}
										value={select.value}
									/>
								))}
							</div>
						</div>
					</div>
				)}
				{name === 'bedTime' && (
					<>
						{selects.slice(2).map((select) => (
							<SelectElement
								key={select.name}
								name={select.name}
								onChange={handleChange}
								options={select.options}
								label={select.label}
								value={select.value}
							/>
						))}
					</>
				)}
				{name === 'wakeUpTime' && (
					<>
						{selects.slice(0, 2).map((select) => (
							<SelectElement
								key={select.name}
								name={select.name}
								onChange={handleChange}
								options={select.options}
								label={select.label}
								value={select.value}
							/>
						))}
					</>
				)}
			</div>
			<button
				className='calculator-calculate-btn'
				onClick={() => handleCalculate()}>
				Calculate
			</button>
			{['wakeUpTime', 'bedTime'].includes(name) && (
				<>
					{sleepParameters && (
						<>
							<p className='optimal-time-info'>
								{name === 'wakeUpTime'
									? 'Optimal wake up time:'
									: 'Optimal bed time:'}
							</p>

							<p className='optimal-time'>
								{formatTime(sleepParameters, name)}
							</p>
						</>
					)}
				</>
			)}
			{sleepParameters && (
				<CalculatedSleepParameters sleepParameters={sleepParameters} />
			)}

			<button className='back-to-previous' onClick={() => navigate(-1)}>
				Back to main menu
			</button>
		</div>
	);
}
