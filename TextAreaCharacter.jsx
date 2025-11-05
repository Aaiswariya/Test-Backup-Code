import { useRef, useState } from "react";

export const TextAreaCharacter = () => {
	const textAreaRef = useRef(null);
	const [charLength, setCharLength] = useState(100);
	const handleChange = () => {
		if (textAreaRef.current) {
			const currentLength = textAreaRef.current.value.length;
			setCharLength(100 - currentLength);
		}
	};

	return (
		<div>
			<h1>TextAreaCharacter</h1>
			<textarea
				ref={textAreaRef}
				onChange={handleChange}
			/>
			<p>Characters left: {charLength}</p>
		</div>
	);
};
