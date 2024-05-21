import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <p></p>
          <Col size={12} sm={6}>
          <h2 style={{color:"white"}}>JDOC</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
          <a href="https://www.linkedin.com/in/josé-ochoa-cairoza-8b7003244" style={{ borderRadius: '50%' }}>
          <FaLinkedin color="#fff" size={32} />
          </a>
          <a href="https://github.com/Jdoc492">
        <FaGithub color="#fff" size={32} />
        </a>
</div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}