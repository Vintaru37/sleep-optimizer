import './App.scss';

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

//components
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';
import SleepCalculatorOptions from './components/sleepCalculatorOptions/SleepCalculatorOptions';
import SleepParameters from './components/sleepParameters/SleepParameters';
import WakeUpTimeCalculator from './components/wakeUpTimeCalculator/WakeUpTimeCalculator';
import SleepQualityCalculator from './components/sleepQualityCalculator/SleepQualityCalculator';
import BedTimeCalculator from './components/bedTimeCalculator/BedTimeCalculator';

//hooks
import useMousePosition from './hooks/useMousePosition';
function App() {
	const mousePosition = useMousePosition();
	useEffect(() => {
		document.body.style.backgroundPosition = `-${mousePosition.x * 0.07}px -${
			mousePosition.y * 0.07
		}px`;
	}, [mousePosition, location]);

	const { pathname } = useLocation();
	if (pathname !== '/') {
		document.body.style.backdropFilter = 'blur(0px)';
	}
	return (
		<Routes>
			<Route path='/sleep-optimizer/' element={<WelcomeScreen />}></Route>
			<Route
				path='/sleep-optimizer/menu'
				element={<SleepCalculatorOptions />}
			/>
			<Route
				path='/sleep-optimizer/sleep-parameters'
				element={<SleepParameters />}
			/>
			<Route
				path='/sleep-optimizer/wake-up-time-calculator'
				element={<WakeUpTimeCalculator />}
			/>
			<Route
				path='/sleep-optimizer/bed-time-calculator'
				element={<BedTimeCalculator />}
			/>
			<Route
				path='/sleep-optimizer/sleep-quality-calculator'
				element={<SleepQualityCalculator />}
			/>
		</Routes>
	);
}

export default App;
