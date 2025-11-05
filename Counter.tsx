export interface ICounter {
	count: number;
	setCount: (value: number) => void;
}
export const Counter: React.FC<ICounter> = ({ count, setCount }) => {
	return (
		<div>
			<h1>Counter Component</h1>
			<button onClick={() => setCount(count + 1)}> Increment </button>
			<button onClick={() => setCount(count - 1)}>Decrement </button>
			<div>{`Count : ${count}`}</div>
		</div>
	);
};
