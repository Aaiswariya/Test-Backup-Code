import { useState, useEffect } from "react";

const simulateAPICall = (query:string): Promise<string[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const data = ["apple", "banana", "orange", "grape", "mango"];
			const filteredData = data.filter((item) =>
				item.toLowerCase().includes(query.toLowerCase())
			);
			resolve(filteredData); // Simulate network delay and return filtered data
		}, 1000);
	});
};
function useDebouncedInput(value:string, delay = 500) {
	const [debouncedInput, setDebouncedInput] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedInput(value), delay);
		return () => clearTimeout(timer);
	}, [value]);

	return debouncedInput;
}

export const DebouncedInputWithSimulation = () => {
	const [input, setInput] = useState("");
	const [results, setResults] = useState<string[]>([]);
	const debouncedValue = useDebouncedInput(input, 500);
	useEffect(() => {
		if (debouncedValue) {
			simulateAPICall(debouncedValue).then((data) => {
				setResults(data);
				console.log("Simulated API data:", data);
			}).catch((error) => {
				console.error("Error fetching data:", error);
			});
		}
	}, [debouncedValue]);

	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Type to search..."
			/>
			<ul>
				{results.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};
