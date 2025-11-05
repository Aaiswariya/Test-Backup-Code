import { useState } from "react";

const data = [
	{
		id: 1,
		title: "Single Toggle Accordion",
		description:
			"A simple accordion component that toggles visibility of content when clicked.",
	},
	{
		id: 2,
		title: "Debounced Search Input",
		description:
			"A search input component that debounces user input to reduce the number of API calls.",
	},
];

export const MultiToggleAccordion = () => {
	const [openIndexes, setOpenIndexes] = useState<number[]>([]);

	const handleToggle = (index: number) => {
		if (openIndexes.includes(index)) {
			setOpenIndexes(openIndexes.filter((i) => i !== index));
		} else {
			setOpenIndexes([...openIndexes, index]);
		}
	};

	return (
		<div>
			{data.map((item, index: number) => {
				return (
					<div key={item.id}>
						<button onClick={() => handleToggle(index)}>{item.title}</button>
						{openIndexes.includes(index) && (
							<div>
								<p>{item.description}</p>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};
