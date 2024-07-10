import SleepCalculator from '../sleepCalculator/SleepCalculator';

export default function SleepQualityCalculator() {
	return (
		<SleepCalculator
			title='How well am I sleeping?'
			inputInfo='times you usually go to bed and wake up'
			name='quality'
		/>
	);
}
