import { useTranslation } from "react-i18next";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import { SectionHeader } from "./SectionHeader";

export const Experience = () => {
  const { t } = useTranslation("global");
  const items = t("experience.items", { returnObjects: true });

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader eyebrow={t("experience.eyebrow")} title={t("experience.title")} />
        <ol className="timeline">
          {items.map((item) => (
            <li className="timeline__item" key={`${item.org}-${item.date}`} data-reveal>
              <span className={`timeline__icon ${item.current ? "timeline__icon--current" : ""}`} aria-hidden="true">
                {item.type === "work" ? <FiBriefcase /> : <FiBookOpen />}
              </span>
              <div className="card timeline__card">
                <div className="timeline__head">
                  <h3>
                    {item.role}
                    {item.current && <span className="badge-now">{t("experience.now")}</span>}
                  </h3>
                  <span className="timeline__date">{item.date}</span>
                </div>
                <p className="timeline__org">{item.org}</p>
                {item.desc && <p>{item.desc}</p>}
                {item.tags.length > 0 && (
                  <ul className="tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
