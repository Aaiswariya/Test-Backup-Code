import * as Yup from "yup";
import { Formik } from "formik";

const schema = Yup.object().shape({
	password: Yup.string()
		.min(8, "Password too short")
		.max(50, "Password too long")
		.required("Password is required"),
	email: Yup.string().email("Email is required").required("Email is required"),
});

export const LoginFormWithYup = () => {
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={schema}
			onSubmit={(values) => {
				console.log("Form data", values);
				alert("Form submitted");
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.email && touched.email && <div>{errors.email}</div>}
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.password && touched.password && (
							<div>{errors.password}</div>
						)}
					</div>
					<button
						type="submit"
						disabled={isSubmitting}
					>
						Submit
					</button>
				</form>
			)}
		</Formik>
	);
};
