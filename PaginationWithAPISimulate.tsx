import { useEffect, useState } from "react";

type FetchDataResult = {
	data: { id: number; name: string }[];
	totalPages: number;
};

const fetchdata = (page: number, limit: number): Promise<FetchDataResult> => {
	// page - current page number
	// limit - number of items per page
	return new Promise((resolve) => {
		setTimeout(() => {
			const totalItems = 100;
			const totalPages = Math.ceil(totalItems / limit); // Calculate total pages
			const data = Array.from({ length: limit }, (_, i) => ({
				// Create dummy data
				id: (page - 1) * limit + i + 1, // Unique ID for each item
				name: `Item ${(page - 1) * limit + i + 1}`, // Item name
			}));
			resolve({ data, totalPages }); // Simulate network delay
		}, 1000);
	});
};

export const PaginationWithAPISimulate = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [response, setResponse] = useState({
		data: [],
		totalPages: 0,
	} as FetchDataResult);
	useEffect(() => {
		fetchdata(currentPage, 10).then((response: FetchDataResult) => {
			console.log("Fetched data:", response);
			setResponse(response);
		});
	}, [currentPage]);

	return (
		<div>
			Pagination with API Simulation Component
			<ul>
				{response.data.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
			<button
				disabled={currentPage === 1}
				onClick={() => setCurrentPage((prev) => prev - 1)} // go to previous page
			>
				Previous
			</button>
			<button
				disabled={currentPage === response.totalPages}
				onClick={() => setCurrentPage((prev) => prev + 1)} // go to next page
			>
				Next
			</button>
			<p>Total Pages: {response.totalPages}</p>
		</div>
	);
};
