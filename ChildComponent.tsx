import { useEffect, useState } from "react";
import { number } from "yup";

type TODO = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export const ChildComponent = ({ filterOption }: { filterOption: string }) => {
	const [todos, setTodos] = useState<TODO[]>([]);
	const [loading, setLoading] = useState(true);
	const [filteredTodos, setFilteredTodos] = useState<TODO[]>([]);
	useEffect(() => {
		const fetchTodos = async () => {
			setLoading(true);
			try {
				const res = await fetch("https://jsonplaceholder.typicode.com/todos");
				const data = await res.json();
				const formatted = data.slice(0, 20).map((item: any) => ({
					userId: item.userId,
					id: item.id,
					title: item.title,
					completed: item.completed,
				}));
				setTodos(formatted);
			} catch (error) {
				console.error("Error fetching todos:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchTodos();
	}, []);
	useEffect(() => {
		let filteredTodos = [];
		if (filterOption === "pending") {
			filteredTodos = todos.filter((todo) => !todo.completed);
		} else if (filterOption === "completed") {
			filteredTodos = todos.filter((todo) => todo.completed);
		} else {
			filteredTodos = todos;
		}
        setFilteredTodos(filteredTodos);
	}, [filterOption]);
	return (
		<div>
			<h2>ChildComponent</h2>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{filteredTodos.map((todo) => (
						<li key={todo.id}>
							<span>{todo.title}</span>
							<span>{todo.completed ? "✅" : "❌"}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
