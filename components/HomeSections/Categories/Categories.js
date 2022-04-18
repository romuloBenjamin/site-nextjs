import SectionTitle from "../SectionTitle/SectionTitle";
import CategoryItem from "./CategoryItem/CategoryItem";
import categoryImage from "../../../public/images/categories/category.png";
import styles from "./Categories.module.scss";
import { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const Categories = () => {
    const sectionName = "Categorias";

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const category = {
            name: "Papéis",
            imageSrc: categoryImage
        };
        const iCategories = [];
        for(let i = 0; i < 4; i++) iCategories.push(category);
        setCategories(iCategories);
    }, []);

    return (
        <div className={styles.categories}>
            <SectionTitle title={sectionName} />
            <div className={"swiper-button-next-cat " + styles.swiperButtonNext}><IoIosArrowDropright /></div>
            <div className={"swiper-button-prev-cat " + styles.swiperButtonPrev}><IoIosArrowDropleft /></div>
            <div className={styles.categoriesList}>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={4}
                    slidesPerGroup={4}
                    navigation={{
                        nextEl: ".swiper-button-next-cat",
                        prevEl: ".swiper-button-prev-cat"
                    }}
                    lazy={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    allowTouchMove={false}
                    scrollbar={{ draggable: false }}>
                        
                        {
                            categories.map((category, index) =>
                                <SwiperSlide key={index}>
                                    <div className={styles.categoryItemWrapper} key={index}><CategoryItem category={category} /></div>
                                </SwiperSlide>)
                        }
                </Swiper>
            </div>
        </div>
    )
}

export default Categories;