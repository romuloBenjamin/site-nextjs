import Link from 'next/link';
//React Icons
import { HiUserCircle } from 'react-icons/hi';

//Styles Scss
import styles from '../header.module.scss';

const Login = () => {
    return (
        <div className={styles.containerLogin}>
            <div className={styles.loginAvatar}><HiUserCircle/></div>                
            <div className={styles.loginCommands}>
                <p><Link href="/"><a><strong>Bem-vindo,</strong></a></Link>
                <br/><Link href="/"><a>Entre</a></Link> ou<br/>
                <Link href="/"><a>Cadastre-se</a></Link></p>
            </div>
        </div>
    );
}

export default Login;