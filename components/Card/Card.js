import styles from "./Card.module.scss";

const Card = (props) => {
    let classNames = styles.card;
    if(props.className) classNames += ` ${props.className}`;
    return (
        <div className={classNames}>
            { props.children }
        </div>
    )
}

export default Card;