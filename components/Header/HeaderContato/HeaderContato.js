import Image from 'next/image';
import Link from 'next/link';

import instagram from '../../../public/images/icons/instagram_icon.png';
import facebook from '../../../public/images/icons/Facebook_logo_(square).png';

const iconWidth = '40'
const iconHeight = '40'

const HeaderContato = () => {
    return (
        <div className={"d-flex align-items-end justify-content-end"}>
            <p>Seg. à Sext. das 08:00 às 18:00 | Contato: (11) 2723-4000 |</p>
            <ul className={"list-group list-group-horizontal"}>
                <li className={"list-group-item border-0"}><Link href="/"><a><Image src={instagram} layout="intrinsic" width={iconWidth} height={iconHeight}/></a></Link></li>
                <li className={"list-group-item border-0"}><Link href="/"><a><Image src={facebook} layout="intrinsic" width={iconWidth} height={iconHeight}/></a></Link></li>
            </ul>
        </div>
    );
}
export default HeaderContato;