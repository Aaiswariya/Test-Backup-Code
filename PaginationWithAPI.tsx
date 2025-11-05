import { useEffect, useState } from "react";

type User = {
	name: string;
	id: number;
};

export const PaginatedUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const fetchUsers = async (pageNum = 1) => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users?page=${pageNum}`
		);
		const data = await response.json(); // Assuming the API returns data in the format { data: User[], total_pages: number }
		setUsers(data);
		// setTotalPages(data.total_pages);
		setTotalPages(4);
	};

	useEffect(() => {
		fetchUsers(currentPage);
	}, [currentPage]);
	return (
		<div>
			<h1>Paginated Users</h1>
			{users.map((user: User) => (
				<div key={user?.id}>{user?.name}</div>
			))}
			<div>
				<button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
					Prev
				</button>
				<span>
					Page {currentPage} of {totalPages}
				</span>
				<button
					onClick={() =>
						setCurrentPage((prev) => Math.min(prev + 1, totalPages))
					}
				>
					Next
				</button>
			</div>
		</div>
	);
};
