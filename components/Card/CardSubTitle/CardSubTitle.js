import styles from "./CardSubTitle.module.scss";

const CardSubTitle = (props) => {
    let classNames = styles.cardSubTitle;
    if(props.className) classNames += ` ${props.className}`;
    return <h2 className={classNames}>{props.children}</h2>;
}

export default CardSubTitle;