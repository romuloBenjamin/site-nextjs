//Components
import MenuMobile from './MenuMobile/MenuMobile';
import MenuSpread from './MenuSpread/MenuSpread';

//Styles Scss
import styles from './menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.menuHeaderLine}>
            <div className={styles.menuHeaderLineConteiner + " justify-content-center"}>
                <div className={styles.menuMobile}><MenuMobile/></div>
                <div className={styles.menuSpread}><MenuSpread/></div>
            </div>
        </div>
    );
}

export default Menu;