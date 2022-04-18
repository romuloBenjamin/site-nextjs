
import styles from "./Footer.module.scss";

import PaymentMethods from './PaymentMethods/PaymentMethods';
import Copyright from "./Copyright/Copyright";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footer + " d-flex flex-column align-items-center justify-items-start"}>
            <div className={styles.listContainer + " d-flex justify-content-evenly"}>
                <ul>
                    <li className={styles.listTitle}>
                        <label>Institucional</label>
                    </li>
                    <li>
                        <Link href="/sobre">
                            <a>Sobre nós</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/trabalhe-conosco">
                            <a>Trabalhe Conosco</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Blog</a>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className={styles.listTitle}>
                        <label>Dúvidas Frequentes</label>
                    </li>
                    <li>
                        <Link href="/politicas-da-empresa">
                            <a>Segurança e Privacidade</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/politicas-da-empresa">
                            <a>Trocas e Devoluções</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Entrega e Retirada</a>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className={styles.listTitle}>
                        <label>Atendimento</label>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Minha Conta</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Contato</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>2ª Via de Boleto</a>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className={styles.listTitle}>
                        <label>Localização</label>
                    </li>
                    <li className={styles.listItem + " " + styles.address}>
                        Administrativo<br />
                        Rua Palmeira Batuá, 243<br />
                        Jardim Eliane, São Paulo - SP<br />
                        Horário - Seg. à Sex. das 8h às 18h
                    </li>
                    <li className={styles.listItem + " " + styles.address}>
                        Centro de Distribuição<br />
                        R. Prof. Hasegawa, 250<br />
                        Colônia (Zona Leste), São Paulo - SP
                    </li>
                </ul>
                <ul>
                    <li className={styles.listTitle + " text-center"}>
                        <label>Formas de Pagamento</label>
                    </li>
                    <li>
                        <PaymentMethods />
                    </li>
                </ul>
            </div>
            <Copyright />
        </div>
    );
}

export default Footer;