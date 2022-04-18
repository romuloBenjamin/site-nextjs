import ProdutoPreview from "../../Products/ProductPreview/ProductPreview";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

import styles from "./FeaturedProducts.module.scss";
import { useState, useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedProducts = ({ id, title }) => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const products = [];
        const product = {
            imageSrc: "https://www.dona.com.br/arquivos/ids/163217-1000-1000/Produto---caixa--28-.png",
            text: "Copo transparente 100mL",
            extraInfo: "c/500 unidades",
            category: "Descartáveis",
            url: "#"
        }
        for(let i = 0; i < 8; i++) products.push(product);
        setFeaturedProducts(products);
    });
    
    return (
        <div className={styles.featuredProducts}>
            <SectionTitle title={title} />
            <div className={styles.productsList}>
                <div className={"swiper-button-next-" + id + " " + styles.swiperButtonNext}><IoIosArrowDropright /></div>
                <div className={"swiper-button-prev-" + id + " " + styles.swiperButtonPrev}><IoIosArrowDropleft /></div>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={4}
                    slidesPerGroup={4}
                    navigation={{
                        nextEl: ".swiper-button-next-" + id,
                        prevEl: ".swiper-button-prev-" + id
                    }}
                    lazy={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    allowTouchMove={false}
                    scrollbar={{ draggable: false }}>
                        
                        {
                            featuredProducts.map((featuredProduct, index) =>
                                <SwiperSlide key={index}>
                                    <div className={styles.productPreviewWrapper}>
                                        <ProdutoPreview product={featuredProduct} />
                                    </div>
                                </SwiperSlide>)
                        }
                </Swiper>
            </div>
        </div>
    )
}

export default FeaturedProducts;