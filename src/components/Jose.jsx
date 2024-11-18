
import { Container, Row, Col} from "react-bootstrap";

import {ArrowRightCircle} from "react-bootstrap-icons";

import logo from "../assets/img/2222.png";

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from "react-i18next";


export const BannerJose = () =>{

    const { t, i18n } = useTranslation("global");

        // Función para abrir el cliente de correo electrónico con el destinatario y asunto predeterminados
        const handleContactClick = () => {
            window.location.href = "mailto:joseochoacz@gmail.com?subject=QUIERO%20CONTRATARTE!";
        };
        
    return(
        <>
        <section className="bannerj" >
            <Container className="mt-5">
                <Row className="align-items-center" id="yo">
                                        <Col  xs={12} md={6} xl={5}>
                        <Row><img src={logo} alt="LOGO" style={{ borderRadius: '50%' }} /></Row>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <h1>{t("jose.Who is this Jose?")}</h1>
                        <p>{t("jose.text-jose")}</p>
                       
                       <div className="social-icon">
                        <a href="https://www.linkedin.com/in/josé-ochoa-cairoza-8b7003244" style={{ borderRadius: '50%' }}>
                        <FaLinkedin color="#fff" size={32} />
                        </a>
                        <a href="https://github.com/Jdoc492">
                        <FaGithub color="#fff" size={32} />
                        </a>
                        </div>
                        <a href="#contact" style={{textDecoration:"none"}}>
                                <button size={25}>{t("footer.Contact")}<ArrowRightCircle/></button>
                            </a>
                    </Col>

                </Row>
            </Container>
        </section>
        </>
    )
}