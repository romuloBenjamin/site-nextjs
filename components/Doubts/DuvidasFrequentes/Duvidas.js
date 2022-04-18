//React
import Links from 'next/link';
//Components
import DuvidasContainer from '../DuvidasContainer/Container';
//Style Scss
import styles from '../duvidas.module.scss';

const Quests = [
    {title: "Como solicitar a 2ª via de boletos?", links: "#"},
    {title: "Quais são os canais oficiais para solicitar a 2ª via de boletos?", links: "#"},
    {title: "Como evitar fraudes?", links: "#"}
];

const Duvidas = () => {
    return (
        <DuvidasContainer>
            <h2>Dúvidas Frequentes</h2>
            {
                Quests.map(quest => {
                    return <Links href={quest.links}><a>{quest.title}</a></Links>
                })
            }            
        </DuvidasContainer>
    )
}
export default Duvidas;