import { BsPlusLg } from "react-icons/bs";
import styles from "./MoreCategoriesItem.module.scss";

const MoreCategoriesItem = () => {
    return (
        <div className={styles.moreCategoriesItem}>
            <div className={styles.iconContainer}><BsPlusLg /></div>
            <span>Mais Categorias</span>
        </div>
    )
}

export default MoreCategoriesItem;