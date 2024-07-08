import './SleepCalculator.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';

//components
import SelectElement from '../selectElement/SelectElement';

// utilities
import CalculateSleepData from '../../utilities/CalculateSleepData';

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
		const sleepInfo = CalculateSleepData(sleepTime);

		console.log(sleepInfo);
	};

	return (
		<div className='calculator-container'>
			<h2 className='calculator-header'>{title}</h2>
			<p>
				Insert the <span>{inputInfo}</span> and we will count the optimal sleep
				time as well as the sleep-related parameters.
			</p>

			<div className='calculator-form-container'>
				{name === 'quality' && (
					<div className='quality-sleep-container'>
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
			<button className='calculator-calculate-btn'>Calculate</button>
			<button className='back-to-previous' onClick={() => navigate(-1)}>
				Back to main menu
			</button>
		</div>
	);
}
