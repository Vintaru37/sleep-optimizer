import './WakeUpTimeCalculator.scss'

//components
import SleepCalculator from '../sleepCalculator/SleepCalculator'
export default function WakeUpTimeCalculator() {
  return (
    <SleepCalculator title='What time should I wake up?' inputInfo='time you usually go to bed' name='wakeUpTime' />

  )
}