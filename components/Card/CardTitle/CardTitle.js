import styles from "./CardTitle.module.scss";

const CardTitle = (props) => {
    let classNames = styles.cardTitle;
    if(props.className) classNames += ` ${props.className}`;
    return <h2 className={classNames}>{props.children}</h2>;
}

export default CardTitle;