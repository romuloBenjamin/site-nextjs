import Image from "next/image";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MainBanner.module.scss";
import banner from "../../../../public/images/banners/main/banner1.png";
import banner2 from "../../../../public/images/banners/main/banner2.png";
import banner3 from "../../../../public/images/banners/main/banner3.png";

const banners = [banner, banner2, banner3];

const MainBanner = () => {
    const pagination = {
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class="${className} ${styles.bulletCurrentItem}"> </span>`;
        },
    };

    return (
        <div className={styles.mainBanner}>
            <div className={"swiper-button-next-main " + styles.swiperButtonNext}><IoIosArrowDropright /></div>
            <div className={"swiper-button-prev-main " + styles.swiperButtonPrev}><IoIosArrowDropleft /></div>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                    nextEl: ".swiper-button-next-main",
                    prevEl: ".swiper-button-prev-main"
                }}
                pagination={pagination}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                }}>
                    {
                        banners.map(
                            (banner, index) => 
                                <SwiperSlide key={index}>
                                    <div className={styles.bannerImage}>
                                        <Image src={banner} layout="intrinsic" width={1920} height={460} />
                                    </div>
                                </SwiperSlide>
                        )
                    }
            </Swiper>
        </div>
    )
}

export default MainBanner;