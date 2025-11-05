import { useRef } from "react";
import { ChildRef } from "./ChildRef.jsx";

export const ParentRef = () => {
	const childRef = useRef();
	const handleEnable = () => {
		if (childRef.current) {
			childRef.current.enableTextBox();
		}
	};
	const handleDisable = () => {
		if (childRef.current) {
			childRef.current.disableTextBox();
		}
	};

	const handleFocus = () => {
		if (childRef.current) {
			if (childRef.current.focusTextbox) {
				childRef.current.focusTextbox();
			}
		}
	};
	return (
		<div>
			<h1>ParentRef</h1>
			<button onClick={handleEnable}>Enable TextBox</button>
			<button onClick={handleDisable}>Disable TextBox</button>
			<button onClick={handleFocus}>Focus TextBox</button>
			<ChildRef ref={childRef} />
		</div>
	);
};
