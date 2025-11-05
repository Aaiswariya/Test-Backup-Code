import { useEffect, useState } from "react";

// This is a custom hook that debounces the input value
function useDebouncedInput(value, delay = 500) {
	const [debouncedInput, setDebouncedInput] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedInput(value), delay);
		return () => clearTimeout(timer);
	}, [value]);

	return debouncedInput;
}

const DebouncedSearchInput = () => {
	const [input, setInput] = useState("");
	const debouncedValue = useDebouncedInput(input, 500);
	const [results, setResults] = useState<string[]>([]);

	useEffect(() => {
		if (debouncedValue) {
			// Simulate an API call with the debounced input value and it returns an array of strings based on the input.
			fetch(`https://api.example.com/search?q=${debouncedValue}`)
				.then((response) => response.json())
				.then((data) => {
					setResults(data); // Update results with the fetched data
				})
				.catch((error) => {
					console.error("Error fetching data:", error);
				});
		} else {
			setResults([]); // Clear results if input is empty
		}
	}, [debouncedValue]);
	


	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<ul>
				{results.map((result) => (
					<li key={result}>{result}</li>
				))}
			</ul>
		</div>
	);
};

export default DebouncedSearchInput;
