import { useState } from "react";

export const DropdownToTextBox = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");
	const handleChangeDropdown = (e: any) => {
		setSelectedValue(e.target.value);
	};
	return (
		<div>
			<select
				onChange={handleChangeDropdown}
				value={selectedValue}
			>
				<option value={""}>Select an option</option>
				<option value={"option1"}>Option 1</option>
				<option value={"option2"}>Option 2</option>
				<option value={"option3"}>Option 3</option>
			</select>
			<label htmlFor="textbox">Selected Value:</label>
			<input
				type="text"
				id="textbox"
				value={selectedValue}
				readOnly
			/>
		</div>
	);
};
