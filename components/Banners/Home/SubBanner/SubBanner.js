import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styles from "./SubBanner.module.scss";
import subBanner1 from "../../../../public/images/banners/sub/subBanner1.png";
import subBanner2 from "../../../../public/images/banners/sub/subBanner2.png"

const banners = [subBanner1, subBanner2];

const SubBanner = () => {
    return (
        <div className={styles.subBanner}>
            <div className={styles.slidesContainer}>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    allowTouchMove={false}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}>
                        {
                            banners.map((banner, index) => {
                                return <SwiperSlide>
                                    <Image src={banner} width={930} height={250} />
                                </SwiperSlide>
                            })
                        }
                </Swiper>
            </div>
        </div>
    )
}

export default SubBanner;