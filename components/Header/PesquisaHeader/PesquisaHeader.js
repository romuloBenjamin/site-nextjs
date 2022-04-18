//React Icons
import { BiSearchAlt2 } from 'react-icons/bi';


//Styles Scss
import styles from '../header.module.scss';

//Componentes
const PesquisaHeader = () => {
    return (
        <div className={styles.containerPesquisar}>
            <form action="javascrip:void(0);" method="POST" name="formularioPesquisar" id="formularioPesquisar" className={styles.formularioPesquisar}>
                <div className={styles.inputPesquisarCustom}><input type="text" name="pesquisar" id="pesquisar" className="form-control" placeholder="Pesquisar..."/></div>
                <div className={styles.inputPesquisarBtn}><button className={styles.btnCustomSecondary + " btn"}><BiSearchAlt2/></button></div>                
            </form>
        </div>
    );
}

export default PesquisaHeader;