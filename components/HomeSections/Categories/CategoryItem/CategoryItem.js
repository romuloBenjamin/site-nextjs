import Image from 'next/image'

import styles from "./CategoryItem.module.scss";

const CategoryItem = ({ category }) => {
    return (
        <div className={styles.categoryItem}>
            <div className={styles.circleBack}>
                <div className={styles.circleFront}>
                    <Image src={category.imageSrc} layout="intrinsic" width={338} height={338} />
                </div>
            </div>
            <div className={styles.categoryName}>{category.name}</div>
        </div>
    )
}

export default CategoryItem;