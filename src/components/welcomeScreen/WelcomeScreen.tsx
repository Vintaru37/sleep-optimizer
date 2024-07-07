import './WelcomeScreen.scss';
import { Link } from 'react-router-dom';

export default function WelcomeScreen() {
	return (
		<div className='welcome-container'>
		  <h1>
			Welcome to <span>Sleep Optimizer</span>
		  </h1>
		  <p>
			Check out how well you're sleeping and discover opportunities to
			improve your sleep schedule
		  </p>
		  <Link to={'menu'}>Get Started</Link>
		</div>
	  );
}
