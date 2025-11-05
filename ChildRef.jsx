import { forwardRef, useImperativeHandle, useRef, useState } from "react";

export const ChildRef = forwardRef((props, ref) => {
	const childRef = useRef(null);
	const [isDisabled, setIsDisabled] = useState(true);
	useImperativeHandle(ref, () => ({
		enableTextBox: () => {
			setIsDisabled(false);
			childRef.current && childRef.current.focus(); // Focus the textbox when enabled
		},
		disableTextBox: () => {
			setIsDisabled(true);
		},
		focusTextBox: () => {
			childRef.current && childRef.current.focus();
		},
	}));
	return (
		<div>
			<label htmlFor="textbox">Textbox:</label>
			<input
				type="text"
				id="textbox"
				ref={childRef}
				disabled={isDisabled}
			/>
		</div>
	);
});
