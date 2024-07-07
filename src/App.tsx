import './App.scss';

import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';
import SleepCalculatorOptions from './components/sleepCalculatorOptions/SleepCalculatorOptions';
import SleepParameters from './components/sleepParameters/SleepParameters';

//hooks
import useMousePosition from './hooks/useMousePosition';
function App() {
	const mousePosition = useMousePosition();
	useEffect(() => {
		document.body.style.backgroundPosition = `-${mousePosition.x * 0.1}px -${mousePosition.y * 0.15}px`;
	
	  }, [mousePosition]);
	return (
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<WelcomeScreen />}></Route>
			<Route path='/menu' element={<SleepCalculatorOptions />}/>
			<Route path='/sleep-parameters' element={<SleepParameters />}/>
			
		</Routes>
		</BrowserRouter>
	);
}

export default App;
