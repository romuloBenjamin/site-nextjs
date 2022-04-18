//Components
import Links from 'next/link';

//Style Scss
import styles from '../menu.module.scss';

const menuItens = [
    {title: "Termo de uso", href: "termo-de-uso", currentPage: true},
    {title: "Segurança e Privacidade", href: "seguranca-e-privacidade", currentPage: false},
    {title: "Trocas e devoluções", href: "#", currentPage: false},
    {title: "Regras de Frete", href: "#", currentPage: false},
    {title: "Regras de Retira", href: "#", currentPage: false},
    {title: "Formas de pagamento", href: "#", currentPage: false}
];

//Populaciona SideMenu
const MenuProps = () => {
    return (
        <SideMenu>
            {
                menuItens.map((map, index) => {
                    let active  = map.currentPage == true? styles.active : ""
                    return <Links href={map.href}><a id={"itens-" + index} className={ active }>{map.title}</a></Links>;
                })
            }
        </SideMenu>
    )
}
//Container SideMenu
const SideMenu = (props) => {
    return (
        <div className={styles.menuPageContainer}>
            { props.children }
        </div>
    )
}
MenuProps();
export default MenuProps
