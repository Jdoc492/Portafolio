import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import cvPDF from "../assets/jd.pdf"; // Ruta al archivo PDF
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import Switch from "react-switch";

export const NavBar = () => {

    const [t, i18n] = useTranslation("global");

    // Para poder setiar el link
    const [activeLink, setActiveLink] = useState("Home");
    // Para guardar la información cuando se haga scroll
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        // Es importante remover el event listener en el cleanup de useEffect
        return () => {
            window.removeEventListener("scroll", onScroll);
        }

    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "en" ? "es" : "en";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <h2 style={{ color: "white" }}>JDOC</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="Navbar-toggler-icon" style={{color:"white"}}>.</span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>{t("navBar.home")}</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>{t("navBar.projects")}</Nav.Link>
                        <Nav.Link href="#yo" className={activeLink === "yo" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>{t("navBar.about")}</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === "contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>{t("navBar.contact")}</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/josé-ochoa-cairoza-8b7003244" style={{ borderRadius: '50%' }}>
                                <FaLinkedin color="#fff" size={32} />
                            </a>
                            <a href="https://github.com/Jdoc492">
                                <FaGithub color="#fff" size={32} />
                            </a>
                        </div>
                        {/* Interruptor de cambio de idioma */}
                        <Switch
                            onChange={toggleLanguage}
                            checked={i18n.language === 'en'}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            onColor="#c2c2c2"
                            offColor="#c2c2c2"
                            className="react-switch"
                            checkedHandleIcon={<span style={{ color: "black" }}>{i18n.language === 'es' ? 'en' : 'es'}</span>}
                            uncheckedHandleIcon={<span style={{ color: "black" }}>{i18n.language === 'es' ? 'en' : 'es'}</span>}
                        />
                        {/* Utiliza un enlace <a> con el atributo download para descargar el PDF */}
                        <a href={cvPDF} download="cv.pdf">
                            <button className="vvd"><span>{t("navBar.DownloadCV")}</span></button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
