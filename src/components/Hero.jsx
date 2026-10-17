import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import foto from "../assets/img/perfil.jpg";
import { links } from "../links";

const floatingTech = ["React", "Laravel", "Django"];

export const Hero = () => {
  const { t } = useTranslation("global");

  return (
    <section className="hero" id="yo">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__text" data-reveal>
          <p className="hero__location">
            <FiMapPin /> {t("hero.location")}
          </p>
          <p className="hero__hello">{t("hero.hello")}</p>
          <h1 className="hero__name">Jose Ochoa</h1>
          <h2 className="hero__role">
            <span className="gradient-text">{t("hero.role")}</span>
          </h2>
          <p className="hero__pitch">{t("hero.pitch")}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              {t("hero.cta")} <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn--ghost">
              {t("hero.talk")}
            </a>
          </div>

          <div className="socials">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${links.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero__photo" data-reveal>
          <div className="hero__ring">
            <img src={foto} alt="Jose Ochoa" width="400" height="400" />
          </div>
          {floatingTech.map((tech, i) => (
            <span key={tech} className={`hero__chip hero__chip--${i + 1}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
