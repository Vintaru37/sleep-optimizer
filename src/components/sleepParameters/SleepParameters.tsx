import { useNavigate } from 'react-router-dom';
import './SleepParameters.scss';
export default function SleepParameters() {
    const navigate = useNavigate();
	return (
		<div className='parameters-container'>
			<h2 className='parameters-title'>Sleep Parameters</h2>
			<h3>REM (Rapid Eye Movement) Sleep</h3>
			<p>
				REM sleep is a stage of sleep characterized by rapid eye movements,
				increased brain activity, and vivid dreams. During REM sleep, the brain
				processes and consolidates memories - it's essential for learning and
				memory formation.
			</p>
			<h3>NREM (Non-Rapid Eye Movement) Sleep</h3>
			<p>
				NREM sleep is a stage of sleep characterized by slower brain waves,
				decreased body temperature, and reduced heart rate. NREM sleep is
				further divided into three stages, with stage 3 being the deepest and
				most restorative stage. NREM sleep is essential for physical recovery
				and rejuvenation.
			</p>

			<div className='sleep-cycle'>
				<h3>Sleep cycles</h3>
				<p>
					A sleep cycle is a period of sleep that consists of three stages of
					non-rapid eye movement (NREM) sleep, followed by a stage of rapid eye
					movement (REM) sleep. Each cycle lasts around 90-120 minutes and most
					people experience 4-6 cycles per night.
				</p>
			</div>
			<h3 className='sleep-inertia'>Sleep Inertia</h3>
			<p>
				Sleep inertia is a temporary feeling of grogginess and disorientation
				after waking up. It's characterized by a lack of energy, difficulty
				concentrating and a general feeling of being "foggy". It can last from
				15 minutes to several hours and is often more pronounced after long naps
				or waking up at an unusual time.
			</p>
			<h3>Deep Sleep</h3>
			<p>
			Deep sleep, also known as slow-wave sleep, is a stage of sleep essential for physical restoration and memory consolidation. During this stage, brain activity slows down, heart rate and breathing decrease, and muscles relax.
			</p>

			<h3>Tips for Quality Sleep</h3>
			<ol>
				<li>Establish a regular sleep schedule and stick to it.</li>
				<li>
					Get enough exercise during the day, but not too close to bedtime.
				</li>
				<li>Limit caffeine and alcohol consumption.</li>
				<li>
					Avoid stimulating activities and electronics at least an hour before
					bedtime.
				</li>
				<li>Keep your bedroom cool, dark, and quiet.</li>
				<li>
					Avoid heavy meals close to bedtime and opt for a light, balanced diet.
				</li>
			</ol>

			<p className='parameters-summary'>
				Since everyone's sleep needs and patterns are unique, it's essential to
				experiment and find the sleep schedule and habits that work best for
				your individual body and lifestyle. What works for one person may not
				work for another, so it's crucial to listen to your own body and adjust
				your sleep approach accordingly.
			</p>
			<button className='back-to-previous' onClick={() => navigate(-1)}>
				Back to main menu
			</button>
		</div>
	);
}
