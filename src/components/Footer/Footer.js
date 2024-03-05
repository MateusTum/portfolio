import React from "react";
import "./Footer.scss";
import GithubIcon from "../SVGS/GithubIcon";
import InstagramIcon from "../SVGS/InstagramIcon";
import LinkedinIcon from "../SVGS/LinkedinIcon";
import { Container, Col, Row } from "react-bootstrap";
import "./Card.scss";

function Footer() {
  return (
    <footer className="border-top mt-2">
      <Container className="text-center">
        <Row>
          <Col lg={12} className="d-flex justify-content-center">
            <div className="footer-card d-flex justify-content-center">
              <a className="social-link1" href="https://www.instagram.com/mateustum/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon width={35} height={35} />
              </a>
              <a className="social-link2" href="https://www.linkedin.com/in/mateus-rosa-tum-7b803a1b6" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon width={35} height={35} />
              </a>
              <a className="social-link3" href="https://github.com/MateusTum" target="_blank" rel="noopener noreferrer">
                <GithubIcon width={35} height={35} />
              </a>
            </div>
          </Col>
          <Col lg={12}>
            <span>© 2024 Mateus Tum</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
