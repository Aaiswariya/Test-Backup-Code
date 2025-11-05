import { useState } from "react";
import { ChildComponent } from "./ChildComponent";

const options = [
	{
		label: "All",
		value: "all",
	},
	{
		label: "Pending",
		value: "pending",
	},
	{
		label: "Completed",
		value: "completed",
	},
];

export const ParentComponent = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");
	const handleChange = (e: any) => {
		setSelectedValue(e.target.value);
	};
	return (
		<div>
			<h1>ParentComponent</h1>
			<select
				onChange={handleChange}
				value={selectedValue}
			>
				<option value="">Select a value</option>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>
			<ChildComponent filterOption={selectedValue} />
		</div>
	);
};
