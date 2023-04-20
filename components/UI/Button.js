import classes from "./Button.module.css";

const Button = (props) => {
	return (
		<button
			type={props.type || "button"}
			className={props.className || classes.btn}
			data-tag={props.tag}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;
