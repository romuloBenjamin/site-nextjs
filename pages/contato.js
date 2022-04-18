import Head from 'next/head'
import BreadcrumbPath from '../components/BreadcrumbPath/BreadcrumbPath';
import Footer from '../components/footer/Footer';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import CardTitle from '../components/Card/CardTitle/CardTitle';
import Menu from '../components/Menu/Menu';
import styles from '../styles/Contato.module.scss';
import CardSubTitle from '../components/Card/CardSubTitle/CardSubTitle';
import { Form } from 'react-bootstrap';
import Input from '../components/Form/Input/Input';
import Select from '../components/Form/Select/Select';

const pathDataArray = [
    {
        href: "/",
        pageName: "sales.com.br"
    },
    {
        href: "#",
        pageName: "Central de atendimento",
        currentPage: true
    }
]

const subjectOptions = [
    {
        value: "2a-via",
        content: "2ª via de boleto"
    },
    {
        value: "cadastro",
        content: "Cadastro"
    },
    {
        value: "trocas-e-devolucoes",
        content: "Trocas e devoluções"
    },
    {
        value: "trabalhe-conosco",
        content: "Trabalhe Conosco"
    },
    {
        value: "entrega",
        content: "Entrega"
    },
    {
        value: "lgpd",
        content: "LGPD"
    },
    {
        value: "outros",
        content: "Outros"
    }
]

export default function Contato() {
    return (
        <div className="page-container">
            <Head>
                <title>Sales - Contato</title>
                <meta name="description" content="Contato" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Menu />
            <BreadcrumbPath pathDataArray={pathDataArray} />
            <main className="main">
                <h1 className={styles.title}>Central de atendimento</h1>
                <div className={styles.content}>
                    <div className={`d-flex flex-column ${styles.cardContainer}`}>
                        <Card className={styles.card}>
                            <CardTitle>Atendimento via Chat</CardTitle>
                            <span>
                                De segunda a sexta das 08h às 18h
                            </span>
                            <Button className={styles.button}>Iniciar</Button>
                        </Card>
                        <Card className={styles.card}>
                            <CardTitle>Outros canais</CardTitle>
                            <span>
                                Central de atendimento<br />
                                2723-4000<br />
                                <br />
                            </span>
                            <span>
                                SAC<br />
                                sac@cleaner.com.br
                            </span>
                        </Card>
                    </div>
                    <Card className={styles.card}>
                        <CardTitle>Enviar um e-mail</CardTitle>
                        <form>
                            <Input label="Nome" type="text" placeholder={"Digite seu nome"} onChange={() => {}} />
                            <Input label="E-mail*" type="email" placeholder={"nome@dominio.com"} onChange={() => {}} />
                            <Input label="CNPJ*" type="text" placeholder={"XX.XXX.XXX/0001-XX"} onChange={() => {}} />
                            <Select label="Selecione o assunto" options={subjectOptions} />
                        </form>
                        <Button className={styles.button}>Enviar</Button>
                    </Card>
                    <Card className={styles.card}>
                        <CardTitle>Localização</CardTitle>
                        <CardSubTitle>Administrativo</CardSubTitle>
                        <span>
                            Rua Palmeira Batuá, 243,<br />
                            Jardim Eliane, São Paulo - SP<br />
                            Horário de atendimento:<br />
                            Seg. à Sex. das 8h às 18h<br />
                            <br />
                        </span>
                        <CardSubTitle>Centro de distribuição</CardSubTitle>
                        <span>
                            R. Prof. Hasegawa, 250,<br />
                            Colônia (Zona Leste)<br />
                            São Paulo - SP<br />
                            Horário de retirada de pedidos:<br />
                            Seg. à Sex. das 8h às 17h
                        </span>
                    </Card>
                </div>
                
            </main>
            <Footer />
        </div>
    )
}