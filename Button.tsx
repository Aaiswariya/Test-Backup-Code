export type ButtonColor = "primary" | "secondary" | "danger" | "success";

export type ButtonProps = {
	buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
    children: React.ReactNode; // Allow any string if not one of the predefined colors
};

export const ButtonComponent: React.FC<ButtonProps> = ({ buttonProps, children }) => (
	<button {...buttonProps}>{children}</button>
);
