import { useEffect, useRef, useState, useCallback } from "react";

export const InfiniteScrollInterSection = () => {
	const [items, setItems] = useState(
		Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
	);
	const [page, setPage] = useState(1);

	const loaderRef = useRef(null);

	const loadMore = useCallback(() => {
		const newItems = Array.from(
			{ length: 20 },
			(_, i) => `Item ${page * 10 + i + 1}`
		);
		setItems((prev) => [...prev, ...newItems]);
		setPage((prev) => prev + 1);
	}, [page]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) { // when the loader is visible
					loadMore();
				}
			},
			{ threshold: 1.0 }// when 100% of the target is visible
		);
		observer.observe(loaderRef.current);// observe the loader
		return () => {
			observer.disconnect();// cleanup the observer on unmount
		};
	}, [loadMore]);

	return (
		<div
			style={{
				width: "300px",
				height: "300px",
				overflowY: "auto",
				border: "1px solid #ccc",
			}}
		>
			{items.map((item) => (
				<div
					key={item}
					style={{ padding: "12px", borderBottom: "1px solid #eee" }}
				>
					{item}
				</div>
			))}
			<div
				ref={loaderRef}
				style={{ textAlign: "center", padding: "12px" }}
			>
				Loading...
			</div>
		</div>
	);
};
