import { useEffect, useRef, useState } from "react";

export const InfiniteScrollingDropdown = () => {
	const [items, setItems] = useState<string[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const itemsPerPage = 20;
	const dropdownRef = useRef<HTMLDivElement>(null);

	const simulateFetchItems = (page: number): Promise<string[]> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const data = Array.from(
					{ length: itemsPerPage },
					(_, i) => `Item ${page * 10 + i + 1}` // Simulated data
				);
				resolve(data);
			}, 1000);
		});
	};
	useEffect(() => {
		simulateFetchItems(page).then((newItems) => {
			setItems((prevItems) => [...prevItems, ...newItems]);
			if (newItems.length === 0) setHasMore(false);
		});
	}, [page]);
	const handleScroll = () => {
		if (dropdownRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = dropdownRef.current;
			if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore) {
				// infinite scroll threshold
				setPage((prevPage) => prevPage + 1);
			}
		}
	};
	return (
		<div style={{ width: "300px" }}>
			<div
				ref={dropdownRef}
				onScroll={handleScroll}
				style={{
					border: "1px solid #ccc",
					height: "300px",
					overflowY: "auto",
				}}
			>
				{items.map((item) => (
					<div key={item}>{item}</div>
				))}
				{!hasMore && <div>No more items</div>}
			</div>
		</div>
	);
};
