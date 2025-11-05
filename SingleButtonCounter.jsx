import { useState, useRef, useEffect } from "react";
import { number } from "yup";

export const SingleButtonCounter = () => {
	const [count, setCount] = useState(0);
	const [stage, setStage] = (useState < "start") | "stop" | ("reset" > "start");
	const timerRef = (useRef < number) | (null > null);

	useEffect(() => {
		if (stage === "start") {
			timerRef.current = window.setInterval(() => {
				setCount((prevCount) => prevCount + 1);
			}, 1000);
		} else {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		}
		if (stage === "reset") {
			setCount(0);
			setStage("start");
		}
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, [setStage, stage, timerRef]);
	const handleClick = () => {
		if (stage === "start") {
			setStage("stop");
		} else if (stage === "stop") {
			setStage("reset");
		}
	};
	return (
		<>
			<div>Single Button Counter</div>
			<p>{count}</p>
			<button onClick={handleClick}>
				{stage === "start" ? "Start" : stage === "stop" ? "Stop" : "Reset"}
			</button>
		</>
	);
};
