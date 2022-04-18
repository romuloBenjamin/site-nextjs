import Link from 'next/link'
import Image from 'next/image'

import iLogo from '../../../public/images/logo/SalesAltaResol.png'
import styles from '../header.module.scss';

const logoW = 320;
const logoh = 110;

const Logo = () => {
    return (
        <div className={styles.headerLogo + " justify-content-center"}>
            <Link href="/"><a><Image src={iLogo} width={logoW} height={logoh} /></a></Link>
        </div>
    )
}

export default Logo;