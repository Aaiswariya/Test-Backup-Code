import { useEffect, useRef, useState } from "react";
// why useRef? because we want to keep the interval ID across renders without causing re-renders
// if we use useState, it will cause a re-render every time we update the interval ID
// useEffect is used to handle side effects, like setting up and cleaning up the interval
const Timer = () => {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setSeconds((prev) => prev + 1);
			}, 1000);
		}
		return () => {
			clearInterval(intervalRef.current ?? undefined);
		};
	}, [isRunning]);
	const handleStart = () => setIsRunning(true);
	const handleStop = () => setIsRunning(false);
	const handleReset = () => {
		setIsRunning(false);
		setSeconds(0);
	};

	const formatTime = (sec: number) => {
		const mins = Math.floor(sec / 60);
		const secs = sec % 60;
		return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
	};
	return (
		<div>
			<h1>Timer</h1>
			<p>This is a timer component.</p>
			<p>Time: {formatTime(seconds)}</p>
			<button
				onClick={handleStart}
				disabled={isRunning}
			>
				Start
			</button>
			<button
				onClick={handleStop}
				disabled={!isRunning}
			>
				Stop
			</button>
			<button
				onClick={handleReset}
				disabled={isRunning}
			>
				Reset
			</button>
		</div>
	);
};

export default Timer;
