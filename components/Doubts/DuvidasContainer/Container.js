//Style Scss
import styles from '../duvidas.module.scss';
//Container
const Container = (props) => {
    return (
        <div className={styles.containerDuvidas}>
            <div className={styles.containerDuvidasInner}>
                {
                    props.children
                }
            </div>
        </div>
    )
}
export default Container;