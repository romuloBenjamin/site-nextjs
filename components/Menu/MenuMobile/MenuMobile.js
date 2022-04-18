//React Icons
import { MdOutlineMenu } from 'react-icons/md';

//Styles Scss
import styles from '../menu.module.scss';

const MenuMobile = () => {
    return (
        <div className={styles.mobileFragments}>
            <button className={"btn"}>
                <span className={"menuSvg"}><MdOutlineMenu/></span>
                <p>Menu</p>
            </button>
        </div>
    );
}

export default MenuMobile;