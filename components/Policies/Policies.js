//Imports Next
import { useRouter } from 'next/router'
//Components
import SideMenu from '../Menu/SideMenu/SideMenu';
import Card from '../Card/Card';
import TitleCard from '../Card/CardTitle/CardTitle';

//Styles Scss
import styles from './policies.module.scss';
let paths;

//Load Policies
const Policies = () => {
    const router = useRouter()
    paths = process.cwd() + "\\components\\Policies\\Termos\\" + router.asPath + ".md"
    
    return (
        <div className={styles.politicsModule}>
            <SideMenu /> 
            <Card className={styles.containerPoliticas}>
                <TitleCard>titulo</TitleCard>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </Card>
        </div>
    );
}

export default Policies;