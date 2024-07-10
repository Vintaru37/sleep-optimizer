import './CalculatedSleepParameters.scss';

import { SleepData } from '../../utilities/CalculateSleepData';

type CalculatedSleepParametersProps = {
	sleepParameters: SleepData;
};

export default function CalculatedSleepParameters({
	sleepParameters: {
		totalSleepTime,
		remSleep,
		nremSleep,
		sleepCycles,
		deepSleep,
	},
}: CalculatedSleepParametersProps) {
	const sleepInertiaRisk = () => {
		if (totalSleepTime < 5) {
			return 'High';
		} else if (totalSleepTime >= 5 && totalSleepTime < 7) {
			return 'Moderate';
		} else {
			return 'Low';
		}
	};

	const formatTime = (time: number) => {
		const hours = Math.floor(time);
		const minutes = Math.round((time - hours) * 60);
		if (minutes === 0) {
			return `${hours} hours`;
		} else if (hours === 0){
			return `${minutes} minutes`;
		} else {
			return `${hours} hours ${minutes} minutes`;
		}
	};

    const content = [
        { label: 'Total amount of sleep', value: formatTime(totalSleepTime) },
        { label: 'Sleep cycles', value: sleepCycles },
        { label: 'REM sleep', value: formatTime(remSleep) },
        { label: 'NREM sleep', value: formatTime(nremSleep) },
        { label: 'Deep sleep', value: formatTime(deepSleep) },
        { label: 'Risk of sleep inertia', value: sleepInertiaRisk() },
      ]

	return (
		<div className='calculated-sleep-parameters'>
  <h3>Calculated Sleep Parameters</h3>
  <p className='subtitle'>
    Note: It typically takes about 15 minutes for the average person to fall asleep.
  </p>
  {content.map((item, index) => (
    <p key={index}>
      {item.label}: <span>{item.value}</span>
    </p>
  ))}
  <p className='sleep-cycles'>
  A healthy night's sleep typically consists of at least 5 full sleep cycles, which translates to a minimum of 7.5 hours of sleep.
  </p>
</div>
	);
}
