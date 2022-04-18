import Link from "next/link";
import styles from "./Newsletter.module.scss";

const Newsletter = () => {
    return <div className={styles.newsletter}>
        <div className={styles.singUp}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span className={styles.calling}>Inscreva-se:</span><br />
                    Receba dicas, notícias
                    e as principais novidades da Sales
                </div>
                <div className={styles.subContainer}>
                    <div className={styles.emailInputContainer}>
                        <label for="emailInput">E-mail:</label>
                        <input type="email" name="emailInput" placeholder="Ex: nome@dominio.com" />
                    </div>
                    <button className="btn btn-primary">Receber novidades</button>
                </div>
            </div>
        </div>
        <div className={styles.privacyContainer}>
            <div className={styles.privacyMessage}>
                <p>A Sales coleta seu e-mail para envio de nossas dicas e novidades. Este dado não é compartilhado com <br />
                terceiros e garantimos sua segurança com base em nossa <Link href="#"><a>Política de Privacidade</a></Link>.</p>
            </div>
        </div>
    </div>
}

export default Newsletter;