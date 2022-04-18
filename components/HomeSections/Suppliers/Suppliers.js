import Image from 'next/image'
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaTruck } from "react-icons/fa";
import styles from "./Suppliers.module.scss";
import { useState, useEffect } from "react";
import SectionTitle from '../SectionTitle/SectionTitle';

const Suppliers = () => {
    const [suppliersList, setSuppliersList] = useState([]);

    useEffect(() => {
        const suppliers = [];
        const supplierNames = [
            "3M", "Altacoppo", "Altaplast", "Baston-Cosmeticos", "Boreda", "Cna", "Coperalcool", "Cristalcopo",
            "DiaaDia", "Dispafilm", "Gitanes", "Ingleza", "	Ipel", "Itaquiti", "LOGO_COPAZA", "Leopack", "Melitta", "Minaplast",
            "Mpr", "Perola", "Rava", "Riccel", "Scotch-Brite", "Start", "Termica", "Volk", "Zulu", "Zumbi", "dvisao", "lafra",
            "sany-mix"
        ];
        supplierNames.forEach(supplierName => suppliers.push({
            url: "http://162.241.88.255/~wwsale/provisorio/1.5/cnt-files/images/fornecedores/" + supplierName + ".png"
        }));
        setSuppliersList(suppliers);
    }, []);

    return (
        <div className={styles.suppliers}>
            <SectionTitle icon={<FaTruck />} title="Fornecedores" />
            <div className={styles.suppliersList}>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={9}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false
                    }}
                    scrollbar={{ draggable: true }}>
                        { suppliersList.map((supplier, index) => <SwiperSlide key={index}><div className={styles.supplier}><Image src={supplier.url} layout={'responsive'} width={150} height={100} /></div></SwiperSlide>) }
                </Swiper>
            </div>
        </div>
    )
}

export default Suppliers;