import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

export const InfiniteScrolling = () => {
	const data = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
	const [items, setItems] = useState(data.slice(0, 20)); // Initial items to display
	const [hasMore, setHasMore] = useState(true);
	const loadMore = () => {
		if (items.length >= data.length) {
			setHasMore(false);
			return;
		}
		const nextItems = data.slice(items.length, items.length + 20);
		setItems([...items, ...nextItems]);
	};
	return (
		<div style={{ height: "400px", overflow: "auto", width: "100%" }}>
			<InfiniteScroll
				pageStart={0}
				loadMore={loadMore}
				hasMore={hasMore}
				useWindow={false} // important to set false when using a scrollable div
				loader={<div key={0}>Loading ...</div>}
			>
				<ul>
					{items.map((item) => (
						<li key={`item=${item}`}>{item}</li> // should not use index as key
					))}
				</ul>
			</InfiniteScroll>
			{!hasMore && <div>No more items to load</div>}
		</div>
	);
};
