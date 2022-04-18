//Next
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

//Styles Scss
import styles from './Carrousel.module.scss'

//Modules
let modules = []
//Navigation Template
const NavigationTemplate = (template) => {
    let setas = template === "SetasSimples" ? { nextEl: ".swiper-button-next-cat", prevEl: ".swiper-button-prev-cat" } : ""
    return setas
}

//Componets
const Carrousel = ({
        modules,
        slideScreamCount = 1,
        nextSlideScreamCount = 1,
        navigationTemplate = "SetasSimples",
        loop,
        lazy,
        isTouchableToMove = false,
        slides
    }) => {

    //Add Modules
    modules === "Navigation"? modules.push(Navigation) : "";

    //NavigationTemplate
    let template = NavigationTemplate(navigationTemplate)
    
    //Components
    return (
        <div className={styles.carrouselContainer}>
            <div className={"swiper-button-next-cat"}><IoIosArrowDropright /></div>
            <div className={"swiper-button-prev-cat"}><IoIosArrowDropleft /></div>
            <div>
                <Swiper 
                    modules={modules}
                    slidesPerView={slideScreamCount}
                    slidesPerGroup={slideScreamCount}
                    navigation={template}
                    lazy={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    allowTouchMove={false}
                    scrollbar={{ draggable: false }}>
                    {                
                        <SwiperSlide key={"0"}>
                        </SwiperSlide>
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Carrousel;