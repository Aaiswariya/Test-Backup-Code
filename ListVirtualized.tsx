import { FixedSizeList as List } from "react-window";

type RowProps = {
	index: number;
	style: React.CSSProperties;
	item: string;
};

const Row = ({ index, style, item }: RowProps) => (
	<div
		style={style}
		key={item + index}
	>
		{item}
	</div>
);

export const VirtualizedList = () => {
	const items = Array.from({ length: 10000 }, (_, i) => `List Item ${i}`);

	return (
		<List
			height={400}
			itemCount={items.length}
			itemSize={35}
			width={300}
		>
			{items.map((item, index) => (
				<Row
					item={item}
					key={index}
					index={index}
					style={{ height: 35 }}
				/>
			))}
		</List>
	);
};
