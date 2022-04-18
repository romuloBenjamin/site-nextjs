import { Breadcrumb } from "react-bootstrap";
import styles from "./BreadcrumbPath.module.scss";

const BreadcrumbPath = ({ pathDataArray }) => {
    return (
        <div className={styles.breadcrumbPath}>
            <Breadcrumb className={styles.breadcrumb}>
                {
                    pathDataArray.map((pathData, index) => {
                        const active = pathData.currentPage ? true : false;
                        return <Breadcrumb.Item key={index} className={active ? styles.active : ""} href={pathData.href} active={active}>
                            { pathData.pageName }
                        </Breadcrumb.Item>
                    })
                }
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumbPath;