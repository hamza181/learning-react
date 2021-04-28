// Topic: Web Animations API with react

// First run =>  npm install '@wellyshen/use-web-animations'
// Animation API website => https://hackernoon.com/creating-highly-performant-animations-using-web-animations-api-and-react-hooks-k92d3utf?source=rss

import React, { useEffect, useRef } from 'react';
import useWebAnimations, { bounce, flash, swing } from '@wellyshen/use-web-animations';
import './App.css';

function App() {
	// start for input
	const element1 = useRef(null);

	useEffect(() => {
		element1.current.focus();
	}, []);

	// end for input

	// start for div1

	const { ref, playState, getAnimation } = useWebAnimations({
		// use array instead of object in keyframes
		keyframes: [ { transform: 'translate(0,0)' }, { transform: 'translate(600px,0)' } ],
		animationOptions: {
			// delay: 500, // Start with a 500ms delay
			duration: 1000, // Run for 1000ms
			iterations: Infinity, // Repeat once
			direction: 'alternate', // Run the animation forwards and then backwards
			easing: 'ease-in-out' // Use a fancy timing function
		}
		// onReady: ({ playState, animate, animation }) => {
		//   // Triggered when the animation is ready to play
		// },
		// onUpdate: ({ playState, animate, animation }) => {
		//   // Triggered when the animation enters the running state or changes state
		// },
		// onFinish: ({ playState, animate, animation }) => {
		//   // Triggered when the animation enters the finished state
		// },
		// More useful options...
	});

	// end for div1

	// start for div2

	// const { ref, playState, getAnimation } = useWebAnimations({...bounce});

	// "bounce" from this site > https://animate.style/

	// end for div2

	return (
		<div>
			{/* focus automaticall in input at start */}
			<input type="text" ref={element1} />
			<br />
			<br />
			<div className="div1" ref={ref} />
			current Animation State: {playState}
			<br />
			<button onClick={() => getAnimation().pause()}>Pause</button>
			<button onClick={() => getAnimation().play()}>Play</button>
			<br />
			<br />
			{/* <div className="div1" ref={ref} /> */}
		</div>
	);
}

export default App;
