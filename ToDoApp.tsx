import { useState } from "react";

const ToDoApp = () => {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState<string[]>([]);

	const handleAddTask = () => {
		if (task.trim() !== "") {
			setTodos([...todos, task]);
			setTask("");
		}
	};
	const deleteTask = (index: number) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};
	return (
		<div>
			<h1>To Do App</h1>
			<input
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				placeholder="Add a new task"
			/>
			<button onClick={handleAddTask}>Add Task</button>
			{todos.map((todo, index) => (
				<div key={index}>
					<span>{todo}</span>
					<button onClick={() => deleteTask(index)}>Delete</button>
				</div>
			))}
		</div>
	);
};
