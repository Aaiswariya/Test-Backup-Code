import { useReducer, useState } from "react";


// Reducer function to manage the state of the to-do list
function toDoReducer(state: any[], action: { type: string; payload: any }) {
	switch (action.type) {
		case "Add":
			return [
				...state,
				{ id: new Date().getTime(), task: action.payload, completed: false },
			];

		case "Remove":
			return state.filter((item) => item.id !== action.payload.id);

		case "Toggle":
			return state.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			});
		default:
			return state;
	}
}

export const TodoApp = () => {
	const [state, dispatch] = useReducer(toDoReducer, []);
	const [task, setTask] = useState("");

	const handleAddTask = () => {
		if (task.trim() !== "") {
			dispatch({ type: "Add", payload: task });
			setTask("");
		}
	};
	const handleDeleteTask = (id: number) => {
		dispatch({ type: "Remove", payload: id });
	};
	const toggleTaskCompletion = (id: number) => {
		dispatch({ type: "Toggle", payload: id });
	};
	return (
		<div>
			<h1>To Do App</h1>
			<input
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<button onClick={handleAddTask}>Add Task</button>

			<ul>
				{state.map((item) => (
					<li
						key={item.id}
						style={{ textDecoration: item.completed ? "line-through" : "none" }}
					>
						{item.task}
						<button onClick={() => toggleTaskCompletion(item)}>Toggle</button>
						<button onClick={() => handleDeleteTask(item)}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	);
};
