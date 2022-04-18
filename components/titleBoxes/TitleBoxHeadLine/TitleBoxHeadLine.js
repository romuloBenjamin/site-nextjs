//Styles Scss
import React from 'react';
import styles from '../TitleBoxes.module.scss'

//Alinhamento do H
let align;

//Componets
const TitleBoxHeadLine = ({headerTypes, headerTitles, headerAlign}) => {
    headerAlign === "start" ? align = styles.titleBoxAlignStart : "";
    headerAlign === "center" ? align = styles.titleBoxAlignCenter : "";
    headerAlign === "end" ? align = styles.titleBoxAlignEnd : "";
    const types = React.createElement(headerTypes, { className: align }, headerTitles)
    return types
}

export default TitleBoxHeadLine;