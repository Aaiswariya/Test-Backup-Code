import { useState } from "react";

const countries = [
	{
		country: "India",
		states: ["Karnataka", "Odisha", "Kolkata"],
	},
	{
		country: "USA",
		states: ["California", "Texas", "Florida"],
	},
];

export const CountriesDropdown = () => {
	const [country, setCountry] = useState("");
	const [state, setState] = useState("");

	const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCountry(e.target.value);
		setState(""); // Reset state when country changes
	};

	const filteredStates =
		countries.find((c) => c.country === country)?.states || [];

	const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setState(e.target.value);
	};
	return (
		<div>
			<select
				value={country}
				onChange={handleCountryChange}
			>
				<option value="">Select Country</option>
				{countries.map((c) => (
					<option
						key={c.country}
						value={c.country}
					>
						{c.country}
					</option>
				))}
			</select>

			<select
				value={state}
				onChange={handleStateChange}
			>
				<option value="">Select State</option>
				{filteredStates.map((s) => (
					<option
						key={s}
						value={s}
					>
						{s}
					</option>
				))}
			</select>
		</div>
	);
};
