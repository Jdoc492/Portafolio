import { useTranslation } from "react-i18next";
import {
  SiAngular, SiBootstrap, SiCss3, SiDjango, SiFigma, SiFirebase, SiGit, SiGithub,
  SiGoogleappsscript, SiHtml5, SiJavascript, SiKotlin, SiLaravel, SiMysql,
  SiNodedotjs, SiPhp, SiPython, SiReact, SiScrumalliance, SiTrello,
} from "react-icons/si";
import { FiGrid, FiServer } from "react-icons/fi";
import { SectionHeader } from "./SectionHeader";

const groups = {
  frontend: [
    ["React", SiReact, "#61dafb"],
    ["JavaScript", SiJavascript, "#f7df1e"],
    ["Angular", SiAngular, "#dd0031"],
    ["HTML5", SiHtml5, "#e34f26"],
    ["CSS3", SiCss3, "#1572b6"],
    ["Bootstrap", SiBootstrap, "#7952b3"],
  ],
  backend: [
    ["PHP", SiPhp, "#777bb4"],
    ["Laravel", SiLaravel, "#ff2d20"],
    ["Python", SiPython, "#3776ab"],
    ["Django", SiDjango, "#44b78b"],
    ["Node.js", SiNodedotjs, "#5fa04e"],
    ["API REST", FiServer, "#38bdf8"],
  ],
  data: [
    ["MySQL", SiMysql, "#4479a1"],
    ["Firebase", SiFirebase, "#ffca28"],
    ["Kotlin", SiKotlin, "#7f52ff"],
  ],
  tools: [
    ["Git", SiGit, "#f05032"],
    ["GitHub", SiGithub, "#e6edf3"],
    ["Figma", SiFigma, "#f24e1e"],
    ["Trello", SiTrello, "#0079bf"],
    ["Scrum", SiScrumalliance, "#009fda"],
    ["Apps Script", SiGoogleappsscript, "#4285f4"],
    ["AppSheet", FiGrid, "#34a853"],
  ],
};

export const Skills = () => {
  const { t } = useTranslation("global");

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader eyebrow={t("skills.eyebrow")} title={t("skills.title")} />
        <div className="skills">
          {Object.entries(groups).map(([key, skills]) => (
            <div className="card skills__group" key={key} data-reveal>
              <h3>{t(`skills.groups.${key}`)}</h3>
              <ul className="skills__list">
                {skills.map(([name, Icon, color]) => (
                  <li key={name} style={{ "--brand": color }}>
                    <Icon aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
