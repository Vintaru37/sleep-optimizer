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
	const { pathname } = useLocation();
	useEffect(() => {
		document.body.style.backgroundPosition = `-${mousePosition.x * 0.07}px -${
			mousePosition.y * 0.07
		}px`;
	}, [mousePosition, location]);

	if (pathname !== '/sleep-optimizer/') {
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
				path='/sleep-parameters'
				element={<SleepParameters />}
			/>
			<Route
				path='/wake-up-time-calculator'
				element={<WakeUpTimeCalculator />}
			/>
			<Route
				path='/bed-time-calculator'
				element={<BedTimeCalculator />}
			/>
			<Route
				path='/sleep-quality-calculator'
				element={<SleepQualityCalculator />}
			/>
		</Routes>
	);
}

export default App;
