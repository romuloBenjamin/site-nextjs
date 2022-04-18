import Image from 'next/image'
import visaIcon from "payment-icons/min/flat/visa.svg"
import mastercardIcon from "payment-icons/min/flat/mastercard.svg"
import hipercardIcon from "payment-icons/min/flat/hipercard.svg"
import eloIcon from "payment-icons/min/flat/elo.svg"
import boletoIcon from "../../../public/images/icons/boleto.svg"

import styles from "./PaymentMethods.module.scss"

const imgWidth = 80;
const imgHeight = 80;

const PaymentMethods = () => {
    return (
        <div className={styles.paymentMethods}>
            <div className="d-flex justify-content-center">
                <div className={styles.paymentMethodIcon}>
                    <Image src={visaIcon} layout='intrinsic' width={imgWidth} height={imgHeight}  />
                </div>
                <div className={styles.paymentMethodIcon}>
                    <Image src={mastercardIcon} layout='intrinsic' width={imgWidth} height={imgHeight}  />
                </div>
                <div className={styles.paymentMethodIcon}>
                    <Image src={hipercardIcon}  layout='intrinsic' width={imgWidth} height={imgHeight} />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className={styles.paymentMethodIcon}>
                    <Image src={eloIcon}  layout='intrinsic' width={imgWidth} height={imgHeight}  />
                </div>
                <div className={styles.boletoIcon}>
                    <Image src={boletoIcon} layout='intrinsic' width={imgWidth} height={imgHeight-31} />
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods