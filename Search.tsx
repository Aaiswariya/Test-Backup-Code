import { useCallback, useMemo, useState } from "react";

const SearchApp = () => {
	//usecall back example
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchQuery = useCallback(
		(e) => {
			setSearchQuery(e.target.value);
		},
		[searchQuery]
	);

	const filteredResults = useMemo(() => {
		//simulate fake api call
		const allItems = ["Apple", "Banana", "Orange", "Grape", "Watermelon"];
		return allItems.filter((item) =>
			item.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}, [searchQuery]);

	return (
		<div>
			<input
				type="search"
				value={searchQuery}
				onChange={handleSearchQuery}
				placeholder="Search..."
			/>
			{filteredResults.length > 0 ? (
				<ul>
					{filteredResults.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			) : (
				<p>No results found</p>
			)}
		</div>
	);
};
export default SearchApp;
