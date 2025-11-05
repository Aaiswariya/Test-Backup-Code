/* ---------------------------------------------------------------------------------------------------------------- */
// useFormStatus- Its an hook which allows to get the status of the form elements anyhwere in the component
// if it has a form element in any of the parent component.
import { useFormStatus } from "react-dom";
import { use, useImperativeHandle, useRef } from "react";

function DesignButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
		/>
	);
}
/* ---------------------------------------------------------------------------------------------------------------- */
// useImperativeHandle - Its an hook which allows to create a custom ref for a component. It takes 3 paramters i.e
//ref: the ref that is passed from the parent component, createHandle: The function that returns the custom ref object,
// deps: The dependencies that will trigger the re-creation of the custom ref object.
function InputCompnent(props, ref) {
	const inputbtnref = useRef(null);
	useImperativeHandle(ref, () => ({
		focus: () => {
			console.log("Focus called");
		},
	}));
	return (
		<input
			ref={inputbtnref}
			placeholder="Enter text"
			{...props}
		/>
	);
}
// export default forwardRef(InputComponent);
// function AppInput() {
// 	const inputRef = useRef(null);
// 	const handleFocus = () => {
// 		if (inputRef.current) {
// 			inputRef.current.focus();
// 		}
// 	};
// 	return (
// 		<InputCompnent
// 			ref={inputRef}
// 			placeholder="Enter text"
// 			onFocus={handleFocus}
// 		/>
// 	);
// }

/* ---------------------------------------------------------------------------------------------------------------- */
// useOptimistic -  Its an hook in React 19 which lets you optimistically update the state of a component.
// Paramerters: initialState: The initial state to be used before the mutation is applied.
// mutate: A function that returns a promise and is used to apply the mutation.
// onSuccess: A callback function that is called when the mutation is successful.
// onError: A callback function that is called when the mutation fails.


/*---------------------------------------------------------------------------------------------------------------- */
//useActionState - 
// It is an hook in React 19 which allows you to manage the state of an action.
// Parameters: handlesubmit: A function that is called when the action is submitted.
// initialState: The initial state of the action.
// It will give you the state of the action, submit action and the isPending state of the action.

//Imported from react.


export default function React18Updates() {
	//use() - not an hook but some changes in the api side where we need to pass a promise to update the api fetching

	const fetchusers = fetch("https://jsonplaceholder.typicode.com/users").then(
		(res) => res.json()
	);
	const users = use(fetchusers); // it will allow the component to suspend until the promise resolves .
	// We need to  wrap the component which will use this use()  in the <suspense> tag  and provide a fallback UI

	return (
		<div>
			<h2>React 18 Updates</h2>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} - {user.email}
					</li>
				))}
			</ul>
		</div>
	);
}
