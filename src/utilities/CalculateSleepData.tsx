type SleepTime = {
    bedTimeHour: number;
    bedTimeMinute: number;
    wakeUpHour: number;
    wakeUpMinute: number;
  }

type SleepData = {
    totalSleepTime: number;
    remSleep: number;
    nremSleep: number;
    deepSleep: number;
    sleepCycles: number;
}
export default function CalculateSleepData({bedTimeHour, bedTimeMinute, wakeUpHour, wakeUpMinute}:SleepTime): SleepData {
    // Calculate total sleep time in minutes
    const bedTimeInMinutes = bedTimeHour * 60 + bedTimeMinute;
    const wakeUpTimeInMinutes = wakeUpHour * 60 + wakeUpMinute;
    const totalSleepTimeInMinutes = wakeUpTimeInMinutes - bedTimeInMinutes;
    const totalSleepTime = parseFloat((totalSleepTimeInMinutes / 60).toFixed(2))
  
    // Calculate sleep cycles (assuming 90-minute cycles)
    const sleepCycles = Math.floor(totalSleepTimeInMinutes / 100);
  
    // Calculate REM sleep (assuming 20% of total sleep time)
    const remSleep = parseFloat((totalSleepTimeInMinutes * 0.2 / 60).toFixed(2));
  
    // Calculate NREM sleep (assuming 60% of total sleep time)
    const nremSleep = parseFloat((totalSleepTimeInMinutes * 0.6 / 60).toFixed(2));
  
    // Calculate deep sleep (assuming 20% of NREM sleep)
    const deepSleep = parseFloat((nremSleep * 0.1 / 60).toFixed(2));
  
    return {
      totalSleepTime,
      remSleep,
      nremSleep,
      deepSleep,
      sleepCycles,
    };
  }