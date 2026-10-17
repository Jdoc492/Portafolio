import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  const { t } = useTranslation("global");
  const stats = t("about.stats", { returnObjects: true });

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} />
        <div className="about">
          <div className="about__text" data-reveal>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
          <div className="about__stats" data-reveal>
            {stats.map((stat) => (
              <div className="stat card" key={stat.label}>
                <span className="stat__value gradient-text">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
