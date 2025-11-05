import { useState } from "react";

/*
    A Higher-Order Component (HOC) in React is a function that takes a component as input (called the WrappedComponent) and 
    returns a new enhanced component with additional props or behavior. It is mainly used to reuse component logic across 
    multiple components, for example sharing common UI behavior, data fetching, or conditional rendering.

    Summary
    HOC = function that takes a component and returns an enhanced new component.

    Used for logic reuse, props injection, conditional rendering, enhancing UI behavior.

    Helps keep components simple and focused by separating concerns.

    This pattern remains useful especially for reusable behaviors, though React Hooks now also cover many reuse cases more simply.
*/
const withHover = (WrappedComponent:any) => {
	return function WithHover(props:any) {
		const [isHovered, setIsHovered] = useState(false);

		return (
			<div
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<WrappedComponent
					{...props}
					isHovered={isHovered}
				/>
			</div>
		);
	};
};

const TextComponent = ({ isHovered, text }: { isHovered: boolean; text: string }) => {
	return <span style={{ color: isHovered ? "blue" : "black" }}>{text}</span>;
};
export const HoverableText = withHover(TextComponent);
