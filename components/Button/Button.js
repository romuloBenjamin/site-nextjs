import styles from "./Button.module.scss";

const Button = (props) => {
    let className = styles.button;
    if(props.className) className += " " + props.className;
    return <button className={className}>{props.children}</button>
}

export default Button;