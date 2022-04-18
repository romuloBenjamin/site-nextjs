//TitleBoxes Containers
import TitleBoxH from './TitleBoxHeadLine/TitleBoxHeadLine'

//Styles Scss
import styles from './TitleBoxes.module.scss'

//Componets
const TitleBoxes = ({types, title, align}) => {
    return (
        <div className={ styles.titleBoxContainer } >
            <TitleBoxH headerTypes={types} headerTitles={title} headerAlign={align} />
        </div>
    );
}

export default TitleBoxes;