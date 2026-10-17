import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import imgInmobiliaria from "../assets/img/proyecto4.png";
import imgMet from "../assets/img/proyectos5.png";
import imgInventory from "../assets/img/inventory.png";
import imgPedidos from "../assets/img/sp.jpg";
import { SectionHeader } from "./SectionHeader";
import { links } from "../links";

// Datos fijos de cada proyecto; títulos y descripciones vienen de las traducciones (mismo orden)
const projects = [
  {
    img: imgInmobiliaria,
    tech: ["React", "Node.js", "JavaScript", "CSS", "Bootstrap"],
    live: "https://invermaxinmobiliaria.co/",
  },
  {
    img: imgMet,
    tech: ["React", "Firebase", "Chart.js", "JavaScript"],
    repo: "https://github.com/Jdoc492/MET",
  },
  {
    img: imgInventory,
    tech: ["PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap"],
    repo: "https://github.com/Jdoc492/Inventario-proyecto-SENA",
  },
  {
    img: imgPedidos,
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    repo: "https://github.com/Jdoc492/Sistema-de-Pedidos",
  },
];

export const Projects = () => {
  const { t } = useTranslation("global");
  const texts = t("projects.items", { returnObjects: true });

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader eyebrow={t("projects.eyebrow")} title={t("projects.title")} />
        <div className="projects">
          {projects.map((project, i) => (
            <article className="card project" key={texts[i].title} data-reveal>
              <div className="project__media">
                <img src={project.img} alt={texts[i].title} loading="lazy" />
              </div>
              <div className="project__body">
                <h3>{texts[i].title}</h3>
                <p>{texts[i].desc}</p>
                <ul className="tags">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project__links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <FiExternalLink /> {t("projects.live")}
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <FaGithub /> {t("projects.code")}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className="projects__more" href={`${links.github}?tab=repositories`} target="_blank" rel="noreferrer">
          {t("projects.more")} <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
};
