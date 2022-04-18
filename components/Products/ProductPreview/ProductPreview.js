import Image from "next/image";
import { FaRegListAlt } from "react-icons/fa";
import { useState } from "react";

import styles from "./ProductPreview.module.scss";

const ProductPreview = ({ product }) => {

    const [quantity, setQuantity] = useState("");

    const updateQuantity = (value) => {
        if(value < 0) return;
        setQuantity(value);
    }

    const onQuantityIncrease = () => {
        let value;
        if(quantity === "") value = 0;
        value = quantity + 1;
        setQuantity(parseInt(value));
    }

    const onQuantityDecrease = () => {
        let value;
        if(quantity === "" || quantity === 0) return;
        value = quantity - 1;
        setQuantity(parseInt(value));
    }

    const onProductClicked = () => {
        //console.log("clicked");
    }

    return (
        <div>
            <div className={styles.productCard}>
                <div className={styles.cardContent}>
                    <div className={styles.product} onClick={onProductClicked}>
                        <button className={styles.addToListButton}>
                            <div className={styles.listIcon}><FaRegListAlt /></div><label>Adicionar à lista</label>
                        </button>
                        <Image src={product.imageSrc} layout="intrinsic" width={250} height={250} />
                        <label className={styles.productDescription}>{product.text}</label>
                        <div>
                            <label className={styles.productExtraInfo}>{product.extraInfo}</label>
                            <button onClick={onQuantityIncrease}>+</button>
                            <input type="number" placeholder={0} min={0} step={1} onChange={(ev) => updateQuantity(ev.target.value)} value={quantity}/>
                            <button onClick={onQuantityDecrease}>-</button>
                        </div>
                    </div>
                    <div className={styles.moreInfo}>
                        <button className={styles.basketButton}>Cotar</button>
                        <div className={`${styles.productCode} d-flex flex-column`}>
                            <label className={styles.codeLabel}>Cód.</label>
                            <label>123456</label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview;