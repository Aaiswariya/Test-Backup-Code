import { useState } from "react";

export const FormElementwithFormData = () => {
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
	const handleSubmit = (e:any) => {
		e.preventDefault(); // Prevent default form submission behavior which is to reload the page on submit
		const formdata = new FormData(e.target);
		const name = formdata.get("name");
		const email = formdata.get("email");
		const password = formdata.get("password");
		const newErrors = { name: "", email: "", password: "" };
		if (!name) newErrors.name = "Name is required";
		if (!email) newErrors.email = "Email is required";
		if (!password) newErrors.password = "Password is required";
		setErrors(newErrors);
		if (newErrors.name || newErrors.email || newErrors.password) return;
		setFormValues({
			name: (name ?? "") as string,
			email: (email ?? "") as string,
			password: (password ?? "") as string,
		});
		console.log("Form Data Submitted:", { name, email, password });
		if (navigator.onLine) {
			const formData = {
				name: formValues.name,
				email: formValues.email,
				password: formValues.password,
			};
			localStorage.setItem("formData", JSON.stringify(formData));
			//simulate fake API call
			setTimeout(() => {
				alert("Form submitted successfully! Data saved online.");
			}, 1000);
		} else {
			alert(
				"You are offline. Please connect to the internet to submit the form."
			);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Name:
					<input
						type="text"
						name="name"
					/>
				</label>
				{errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
			</div>
			<div>
				<label>
					Email:
					<input
						type="email"
						name="email"
					/>
				</label>
				{errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
			</div>
			<div>
				<label>
					Password:
					<input
						type="password"
						name="password"
					/>
				</label>
				{errors.password && (
					<span style={{ color: "red" }}>{errors.password}</span>
				)}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
