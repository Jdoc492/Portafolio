import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { links } from "../links";

const sections = ["about", "experience", "skills", "projects", "contact"];

export const NavBar = () => {
  const { t, i18n } = useTranslation("global");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Marca como activa la última sección cuyo inicio ya pasó
      const current = sections.filter((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= 120;
      });
      setActive(current[current.length - 1] || "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    const next = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="container nav__inner">
        <a href="#yo" className="nav__brand" onClick={() => setOpen(false)}>
          JDOC<span>.</span>
        </a>

        <nav className="nav__links" aria-label="Principal">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Cambiar idioma / Change language">
            <span className={i18n.language === "es" ? "is-on" : ""}>ES</span>
            <span className={i18n.language === "en" ? "is-on" : ""}>EN</span>
          </button>
          <a className="btn btn--primary btn--sm nav__cv" href={links.cv} download="Jose-Ochoa-CV.pdf">
            <FiDownload /> {t("nav.cv")}
          </a>
          <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Menú" aria-expanded={open}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};
