//Style Scss
import styles from '../menu.module.scss';

const MenuSpread = () => {
    return (
        <div className={styles.menuSpreadContainer}>
            <div><span>Papéis</span></div>
            <div><span>Descártaveis</span></div>
            <div><span>Produtos de limpeza</span></div>
            <div><span>Alimentícios</span></div>
            <div><span>Higiene</span></div>            
        </div>
    );
}

export default MenuSpread;