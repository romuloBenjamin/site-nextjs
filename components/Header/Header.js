import HeaderContato from './HeaderContato/HeaderContato';
import Logo from './Logo/Logo';
import Pesquisa from './PesquisaHeader/PesquisaHeader';
import Login from './Login/Login';
import Cotacao from './Cotacao/Orcamentos';

//CSS Style
import styles from './header.module.scss';

const Header = ({ hideSearchBar }) => {
    return (
        <header className={styles.containerHeader + " justify-content-center d-flex flex-column"}>
            <div className={styles.contatoHeader}>
                <HeaderContato/>
            </div>
            <div className={styles.containerHeaderMain + " d-flex align-items-center justify-content-end"}>
                <div className={styles.containerGridMain}>
                    <Logo />
                    { hideSearchBar ? null : <Pesquisa />}
                    <Login />
                    <Cotacao />
                </div>
            </div>
        </header>
    )
}

export default Header;