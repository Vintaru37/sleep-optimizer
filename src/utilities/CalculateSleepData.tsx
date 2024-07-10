type SleepTime = {
	bedTimeHour: number;
	bedTimeMinute: number;
	wakeUpHour: number;
	wakeUpMinute: number;
};

export type SleepData = {
	totalSleepTime: number;
	remSleep: number;
	nremSleep: number;
	deepSleep: number;
	sleepCycles: number;
	optimalBedTimeHour: number;
	optimalBedTimeMinute: number;
	optimalWakeUpHour: number;
	optimalWakeUpMinute: number;
};

export default function CalculateSleepData(
	{ bedTimeHour, bedTimeMinute, wakeUpHour, wakeUpMinute }: SleepTime,
	calculatorType: string
): SleepData {
	let bedTimeInMinutes: number;
	let wakeUpTimeInMinutes: number;
	let totalSleepTimeInMinutes: number;

	// Calculator 1: User inputs both bed time and wake up time
	if (calculatorType === 'quality') {
		bedTimeInMinutes = (bedTimeHour ?? 0) * 60 + (bedTimeMinute ?? 0) + 15;
		wakeUpTimeInMinutes = (wakeUpHour ?? 0) * 60 + (wakeUpMinute ?? 0);

		// If wake-up time is earlier than bed time, add 24 hours to wake-up time
		if (wakeUpTimeInMinutes < bedTimeInMinutes) {
			wakeUpTimeInMinutes += 24 * 60;
		}
	}
	// Calculator 2: User inputs only wake up time
	else if (calculatorType === 'bedTime') {
		wakeUpTimeInMinutes = (wakeUpHour ?? 0) * 60 + (wakeUpMinute ?? 0);
		bedTimeInMinutes = wakeUpTimeInMinutes - 450 - 15;
		// 7 hours 30 minutes earlier - 15 minutes to fall asleep

		// Adjust bed time if it's earlier than 00:00
		if (bedTimeInMinutes < 0) {
			bedTimeInMinutes += 1440;
		}
	}
	// Calculator 3: User inputs only bed time
	else if (calculatorType === 'wakeUpTime') {
		bedTimeInMinutes = (bedTimeHour ?? 0) * 60 + (bedTimeMinute ?? 0);
		wakeUpTimeInMinutes = bedTimeInMinutes + 450 + 15;
		// 7 hours 30 minutes later + 15 minutes to fall asleep
	} else {
		throw new Error(
			'Invalid input. Please provide either bed time, wake up time, or both.'
		);
	}

	// Calculate optimal bed time and wake up time
	const optimalBedTimeHour = Math.floor(bedTimeInMinutes / 60);
	const optimalBedTimeMinute = bedTimeInMinutes % 60;
	const optimalWakeUpHour = Math.floor(wakeUpTimeInMinutes / 60);
	const optimalWakeUpMinute = wakeUpTimeInMinutes % 60;

	totalSleepTimeInMinutes = wakeUpTimeInMinutes - bedTimeInMinutes;
	if (calculatorType === 'bedTime' || calculatorType === 'wakeUpTime') {
		totalSleepTimeInMinutes = 450;
	}
	const totalSleepTime = parseFloat((totalSleepTimeInMinutes / 60).toFixed(2));

	// Calculate sleep cycles (assuming 90-minute cycles)
	const sleepCycles = Math.floor(totalSleepTimeInMinutes / 90);

	// Calculate REM sleep (assuming 22.5% of total sleep time)
	const remSleep = parseFloat(
		((totalSleepTimeInMinutes * 0.225) / 60).toFixed(2)
	);

	// Calculate NREM sleep (assuming 77.5% of total sleep time)
	const nremSleep = parseFloat(
		((totalSleepTimeInMinutes * 0.775) / 60).toFixed(2)
	);

	// Calculate deep sleep (assuming 20% of total sleep time)
	const deepSleep = parseFloat(
		((totalSleepTimeInMinutes * 0.2) / 60).toFixed(2)
	);

	return {
		totalSleepTime,
		remSleep,
		nremSleep,
		deepSleep,
		sleepCycles,
		optimalBedTimeHour,
		optimalBedTimeMinute,
		optimalWakeUpHour,
		optimalWakeUpMinute,
	};
}