import { console } from "inspector";
import { useRef, useState } from "react";

// controlled component example
export const FormElement = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
	});
	const handleFormValues = (field, value) => {
		setFormValues({
			...formValues,
			[field]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let emailErrors = "";
		let nameErrors = "";
		let passwordErrors = "";
		console.log("Form submitted", { formValues });
		if (!formValues.name) {
			nameErrors = "Name is required";
		}
		if (!formValues.email) {
			emailErrors = "Email is required";
			if (
				formValues.email && !formValues.email.includes('@')
			) {
				emailErrors = "Email is not valid";
			}
		}
		if (!formValues.password) {
			passwordErrors = "Password is required";
		}
		if (emailErrors || nameErrors || passwordErrors) {
			setErrors({
				name: nameErrors,
				email: emailErrors,
				password: passwordErrors,
			});
		} else {
			if (navigator.onLine) {
				// Handle successful submission
				setErrors({
					name: "",
					email: "",
					password: "",
				});
				// Simulate online submission (e.g., save to local storage)
				const formData = {
					name: formValues.name,
					email: formValues.email,
					password: formValues.password,
				};
				localStorage.setItem("formData", JSON.stringify(formData));
				setTimeout(() => {
					alert("Form submitted successfully! Data saved online.");
				}, 1000);
			} else {
				alert(
					"You are offline. Please connect to the internet to submit the form."
				);
			}
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				id="name"
				name="name"
				value={formValues.name}
				onChange={(e) => handleFormValues("name", e.target.value)}
			/>
			{errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				onChange={(e) => handleFormValues("email", e.target.value)}
				value={formValues.email}
			/>
			{errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
			<label htmlFor="password">Password:</label>
			<input
				type="password"
				id="password"
				name="password"
				value={formValues.password}
				onChange={(e) => handleFormValues("password", e.target.value)}
			/>
			{errors.password && (
				<span style={{ color: "red" }}>{errors.password}</span>
			)}
		</form>
	);
};

//uncontrolled component example
export const UncontrolledComponent = () => {
	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Input Value: ${inputRef.current.value}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="uncontrolled-input">Uncontrolled Input:</label>
			<input
				type="text"
				id="uncontrolled-input"
				ref={inputRef}
			/>
		</form>
	);
};
