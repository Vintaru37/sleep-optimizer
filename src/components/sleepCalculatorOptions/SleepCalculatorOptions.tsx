import './SleepCalculatorOptions.scss';
import { Link } from 'react-router-dom';

export default function SleepCalculatorOptions() {
	const options = [
		{
			title: 'How well am I sleeping?',
			description:
				'Choose this option if you want to know how well you are sleeping and what you can improve on.',
			buttonText: 'Select',
			linkTo: '/sleep-quality-calculator',
		},
		{
			title: 'What time should I wake up?',
			description:
				'Choose this option to find out how long you should sleep to be fully rested and minimise the risk of sleep inertia.',
			buttonText: 'Select',
			linkTo: '/wake-up-time-calculator',
		},
		{
			title: 'What time should I go to bed?',
			description:
				'Choose this option to find out what time you should go to bed to wake up rested as soon as possible.',
			buttonText: 'Select',
			linkTo: '/bed-time-calculator',
		},
		{
			title: 'Information Note',
			description:
				'Based on the data you enter, specific sleep parameters will be calculated. To find out more about the sleep parameters, click on the button below.',
			buttonText: 'Sleep parameters',
			linkTo: '/sleep-parameters',
		},
	];
	return (
		<div className='calculator-container'>
			<h2 className='calculator-header'>Sleep Calculator</h2>

			<p>Choose one of the available options</p>

			<div className='calculator-options'>
				{options.map((option, index) => (
					<div key={index} className='calculator-options-item'>
						<h3>{option.title}</h3>
						<p>{option.description}</p>
						<Link className='calculator-button' to={option.linkTo}>
							{option.buttonText}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
