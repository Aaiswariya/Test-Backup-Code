import { useCallback, useEffect, useRef, useState } from "react";

export const InfiniteScrollNormal = () => {
	const [items, setItems] = useState(
		Array.from({ length: 20 }, (_, i) => `Items ${i + 1}`)
	);

	const [page, setPage] = useState(1);
	const containerRef = useRef(null);
	const loadingRef = useRef(false);

	const loadMoreItems = useCallback(() => {
		if (loadingRef.current) return;
		loadingRef.current = true;

		setTimeout(() => {
			const nextItems = Array.from(
				{ length: 20 },
				(_, i) => `Items ${page * 20 + i + 1}`
			);
			setItems((prev) => [...prev, ...nextItems]);
			setPage((prev) => prev + 1);
			loadingRef.current = false;
		}, 800);
	}, [page]);

	const throttle = (func, delay) => {
		let inthrottle = false;
		return (...args) => {
			if (!inthrottle) {
				// if not in throttle, execute the function
				func(...args); // execute the function
				inthrottle = true; // set in throttle to true
				setTimeout(() => (inthrottle = false), delay); // after delay, set in throttle to false
			}
		};
	};

	useEffect(() => {
		const container = containerRef.current;
		const handleScroll = () => {
			if (!container) return;
			const { scrollTop, clientHeight, scrollHeight } = container;
			if (scrollTop + clientHeight >= scrollHeight - 30) {
				loadMoreItems();
			}
		};
		const throttledHandleScroll = throttle(handleScroll, 300);

		container.addEventListener("scroll", throttledHandleScroll);
        handleScroll(); // to load initial items if container is not full
		return () => {
			container.removeEventListener("scroll", throttledHandleScroll);
		};
	}, [loadMoreItems]);
	console.log("items", items);
	return (
			<div
				ref={containerRef}
				style={{
					width: "300px",
					height: "300px",
					overflowY: "auto",
					border: "1px solid #ccc",
				}}
			>
				{items.map((item, index) => (
					<div
						key={index}
						style={{ padding: "12px", borderBottom: "1px solid #eee" }}
					>
						{item}
					</div>
				))}
				<div style={{ textAlign: "center", padding: "12px" }}>
					{loadingRef.current ? "Loading..." : "Scroll to load more"}
				</div>
			</div>
	);
};
