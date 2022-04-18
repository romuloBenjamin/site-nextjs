import Link from 'next/link';

import styles from '../header.module.scss';

const Cotacao = () => {
    return <div className={styles.cotacaoContainer + " justify-content-center"}><Link href="/"><button className={styles.cotacao + " btn"}>Cotação</button></Link></div>
}
export default Cotacao;