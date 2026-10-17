import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { links } from "../links";

export const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#yo" className="nav__brand">
          JDOC<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} · {t("footer.made")}
        </p>
        <div className="socials socials--sm">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};
