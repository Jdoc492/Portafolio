
import { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { useTranslation } from "react-i18next";
import { idiomaContex } from '../App';

export const Banner = () => {
  const [activeLink, setActiveLink] = useState(null);
  const { t, i18n } = useTranslation("global");
  const languageContext = useContext(idiomaContex);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
            <span className="tagline">{t("banner.Welcome to my Portfolio")}</span>
              <h1>
                {t("banner.jose")}
                <span className="wrap">{t("banner.Hi, I’m Jose Front-End Developer")}</span>
              </h1>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="LOGO" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

