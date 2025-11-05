import React, { useReducer } from "react";

function cartReducer(state, action) {
	switch (action.type) {
		case "Add":
			return [...state, action.payload];
		case "Remove":
			return state.filter((item) => item.id !== action.payload.id);
		case "default":
			return state;
	}
}

export function UseReduceCart() {
	const { dispatch, state } = useReducer(cartReducer, []);

	const addItemToCart = (item) => {
		dispatch({ type: "Add", payload: item });
	};

	const removeItemFromCart = (item) => {
		dispatch({ type: "Remove", payload: item });
	};

	return (
		<div>
			<h1>Cart Items</h1>
			<ul>
				{state.map((item) => {
					return (
						<li key={item.id}>
							{item.name}
							<button onClick={removeItemFromCart(item)}>Remove</button>
						</li>
					);
				})}
			</ul>
			<button
				onClick={addItemToCart({ id: new Date().getTime(), name: "New Item" })}
			>
				Add item
			</button>
		</div>
	);
}
