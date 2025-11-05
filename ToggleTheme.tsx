import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ToggleTheme = () => {
	const { theme, toggletheme } = useContext(ThemeContext);
	return (
		<div
			style={{
				backgroundColor: `${theme === "dark" ? "black" : "white"}`,
				color: `${theme === "dark" ? "white" : "black"}`,
			}}
		>
			<h1>{`Toggle Theme: ${theme}`} </h1>
			<button onClick={toggletheme}>Toggle</button>
		</div>
	);
};
