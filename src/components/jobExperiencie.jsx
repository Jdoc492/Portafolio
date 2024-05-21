import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { useTranslation } from "react-i18next";
import { Row,Col} from 'react-bootstrap';

export const JobExperiencie = () => {

  const { t, i18n } = useTranslation("global");



  return (
    <section className="skill" id="skills" style={{marginTop:"20px"}}>
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
                <Row>
                    <Col sm = {12} xs={12} md={6} xl={6}><h3>{t("job.estudios")}</h3>
                    <div className='Job'>
                        <h5>{t("job.titulo")}</h5>
                        <h6>Servicio Nacional de Aprendizaje SENA</h6>
                        <p>{t("job.abril")} 2022 | {t("job.junio")} 2024</p>
                    </div>
                    </Col >
                    <Col sm = {12} xs={12} md={6} xl={6}><h3>{t("job.experiencia")}</h3>
                    <div className='Job'>
                        <h5>{t("job.titulojob")} </h5>
                        <h6>Pastas Comarrico S.A.S ( Barranquilla )</h6>
                        <p>{t("job.octubre")} 2023 | {t("job.abril")} 2024</p>
                        
                            <div className='JobSkills'>Javascript</div>
                            <div className='JobSkills'>HTML</div>
                            <div className='JobSkills'>CSS</div>
                            <div className='JobSkills'>Bootstrap</div>
                            <div className='JobSkills'>Appscript</div>
                            <div className='JobSkills'>Appsheet</div>
                            <div className='JobSkills'>React</div>
                            <div className='JobSkills'>PHP</div>
                            <div className='JobSkills'>Angular</div>
                            <div className='JobSkills'>Laravel</div>
                            <div className='JobSkills'>Trello</div>
                            <div className='JobSkills'>Git</div>
                            <div className='JobSkills'>Scrum</div>
                            <div className='JobSkills'>Figma</div>
                    
                    </div>
                    </Col>
                </Row>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}