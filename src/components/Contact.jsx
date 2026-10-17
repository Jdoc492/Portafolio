import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi";
import { SectionHeader } from "./SectionHeader";
import { links } from "../links";

export const Contact = () => {
  const { t } = useTranslation("global");
  const refForm = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("sending");

    const serviceID = "service_0fn0mbk";
    const templateID = "template_s8dx3cn";
    const apiKey = "DOrrlnWOLm89ye_P_";

    emailjs
      .sendForm(serviceID, templateID, refForm.current, apiKey)
      .then(() => {
        refForm.current.reset();
        setStatus("ok");
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} />
        <div className="contact">
          <div className="contact__info" data-reveal>
            <p>{t("contact.text")}</p>
            <a className="contact__link" href={`mailto:${links.email}`}>
              <FiMail /> {links.email}
            </a>
            <a className="contact__link" href={links.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a className="contact__link" href={links.github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>

          <form ref={refForm} className="card contact__form" onSubmit={handleSubmit} data-reveal>
            <div className="field-row">
              <label className="field">
                <span>{t("contact.name")}</span>
                <input type="text" name="username" autoComplete="name" required />
              </label>
              <label className="field">
                <span>{t("contact.email")}</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>
            <label className="field">
              <span>{t("contact.subject")}</span>
              <input type="text" name="subject" required />
            </label>
            <label className="field">
              <span>{t("contact.message")}</span>
              <textarea name="message" rows={5} required />
            </label>
            <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? t("contact.sending") : t("contact.send")} <FiSend />
            </button>
            {status === "ok" && <p className="form-msg form-msg--ok">{t("contact.ok")}</p>}
            {status === "error" && <p className="form-msg form-msg--error">{t("contact.error")}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
