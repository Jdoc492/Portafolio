import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/inventory.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/sp.jpg";
import projImg4 from "../assets/img/proyecto4.png";
import projImg5 from "../assets/img/proyectos5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from "react-i18next";

export const Projects = () => {

  const { t, i18n } = useTranslation("global");
  const projects = [
    
    {
      title: t("projects.title4"),
      description:t("projects.description4") ,
      technologies: [ "Node","React","Javascript", "HTML","CSS","Bootstrap"],
      imgUrl: projImg4,
      urlDestino: "https://invermaxinmobiliaria.co/"
  },
    {
        title: t("projects.title1"),
        description:t("projects.description1") ,
        technologies: ["PHP","Javascript", "HTML", "CSS", "Bootstrap","AJAX","MYSQL"],
        imgUrl: projImg1,
        urlDestino: "https://github.com/Jdoc492/Inventario-proyecto-SENA"
    },
    {
      title: t("projects.title5"),
      description:t("projects.description5") ,
      technologies: [ "firebase","React","Javascript", "HTML","CSS","Bootstrap","librerias de Graficas"],
      imgUrl: projImg5,
      urlDestino: "https://github.com/Jdoc492/MET"
  },
    {
      title: t("projects.title3"),
      description:t("projects.description3") ,
      technologies: [ "Laravel","PHP","Javascript", "HTML","CSS","Bootstrap"],
      imgUrl: projImg3,
      urlDestino: "https://github.com/Jdoc492/Sistema-de-Pedidos"
  }

];


  return (
    <section className="project" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 id="projects">{t("project.projects")}</h2>
                <p></p>
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <>
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                <p></p>
                                
                              </>
                            )
                          })
                        }
                      </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}