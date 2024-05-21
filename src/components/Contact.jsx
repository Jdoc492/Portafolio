import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Astronauta from "../assets/img/astronauta.png";
import { useTranslation } from "react-i18next";


export const Contact = () => {

  const { t, i18n } = useTranslation("global");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceID = "service_0fn0mbk";
    const templateID = "template_s8dx3cn";
    const apiKey = "DOrrlnWOLm89ye_P_";

    emailjs
      .sendForm(serviceID, templateID, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        refForm.current.reset(); // Resetear el formulario después de enviar con éxito
        setFormSubmitted(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <section id="contact" className="bannerj">
        <Container>
        <h2>{t("footer.Contact")}</h2>
          <div className="divContact">
          <Row>
            <Col xs={12} md={5} xl={5}>
              <img src={Astronauta} alt="Astronauta" />
            </Col>
            <Col xs={12} md={7} xl={7}>
             
              <Form ref={refForm} className="form" onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>{t("footer.name")}</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder={t("footer.d-name")}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>{t("footer.email")}</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder={t("footer.d-email")}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formSubject">
                  <Form.Label>{t("footer.Subject")}</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder={t("footer.Subject")}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>{t("footer.Description")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder={t("footer.d-d")}
                    rows={3}
                    required
                  />
                </Form.Group>
                <p></p>
                <Button variant="outline-light" type="submit">
                {t("footer.send")}
                </Button>
              </Form>
              {formSubmitted && (
                <p className="text-success mt-3">Formulario enviado con éxito</p>
              )}
            </Col>
          </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
