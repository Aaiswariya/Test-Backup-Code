import './ResponsiveCardLayout.css';
import React from 'react';

export const ResponsiveCardLayout = () => {
	const cards = Array.from({ length: 7 }, (_, i) => `Card ${i + 1}`);
	return (
		<div className="responsive-card-layout">
			{cards.map((card, index) => {
				return (
					<div
						className="card"
						key={index}
					>
						{card}
					</div>
				);
			})}
		</div>
	);
};
