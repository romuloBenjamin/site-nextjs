import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
    return (
        <div className={styles.titleWrapper}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{title}</h2>
            </div>
        </div>
    );
}

export default SectionTitle;