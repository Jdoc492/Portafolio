import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const ProjectCard = ({ title, description, imgUrl, urlDestino, technologies }) => {

    const { t, i18n } = useTranslation("global");
    return (
        <Row>
            <Col size={12} sm={6} md={4}>
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        
                    </div>
                </div>
            </Col>
            <Col>
                <h4>{title}</h4>
                <spam style={{textAlign:"left"}}>{description}</spam>
                <div className="job-skills">
                    {technologies && technologies.map((tech, index) => (
                        <div key={index} className='JobSkills'>{tech}</div>
                    ))}
                </div>
                <a href={urlDestino} id="btndestino">{t("i.i")}</a>
            </Col>
            
        </Row>
    )
}
