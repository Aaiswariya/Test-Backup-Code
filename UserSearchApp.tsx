import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

type User = {
	name: string;
	email: string;
	
};

export const UserSearchApp: FC<{}> = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [searchUser, setSearchUser] = useState("");
	const inputRef = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	const deBouncedRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const handleInputChange = useCallback((e) => {
		const value = e.target.value;
		if (deBouncedRef.current) {
			clearTimeout(deBouncedRef.current);
		}
		deBouncedRef.current = setTimeout(() => {
			setSearchUser(value);
		}, 500);
	}, []);

	const filteredUsers = useMemo(() => {
		return users.filter((user) => {
			return user?.name.toLowerCase().includes(searchUser.toLowerCase());
		});
	}, [users, searchUser]);
	return (
		<div>
			<h1>User Search</h1>
			<p>Search for users here.</p>
			<input
				type="text"
				value={searchUser}
				onChange={handleInputChange}
				placeholder="Search by name"
				ref={inputRef}
			/>
			<div>
				{filteredUsers.map((user) => (
					<div key={user.email}>
						<h2>{user.name}</h2>
						<p>{user.email}</p>
					</div>
				))}
			</div>
		</div>
	);
};
