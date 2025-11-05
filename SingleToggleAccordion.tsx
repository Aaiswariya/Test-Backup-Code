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

export const SingleToggleAccordion = () => {
	const [open, setOpen] = useState<number | null>(null);

	const handleAccordionToggle = (index: number) => {
		setOpen(index === open ? null : index);
	};
	return (
		<div>
			<h1>Single Toggle Accordion</h1>
			<div>
				{data.map((item, index) => (
					<div key={item.id}>
						<button onClick={() => handleAccordionToggle(index)}>
							{item.title}
						</button>
						{open === index && (
							<div>
								<p>{item.description}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
