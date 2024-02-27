import React from "react";
import "./Footer.scss";
import GithubIcon from "../SVGS/GithubIcon";
import InstagramIcon from "../SVGS/InstagramIcon";
import LinkedinIcon from "../SVGS/LinkedinIcon";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
      <footer className="border-top mt-2">
        <Row className="d-flex">
          <Col className="d-flex justify-content-center justify-content-sm-start">
            <span className="mb-0 text-body-secondary">© 2024 Mateus Tum</span>
          </Col>
          <Col className="d-flex justify-content-center justify-content-sm-end">
            <ul className="nav">
              <li className="me-3">
                <a
                  className="text-body-secondary"
                  href="https://github.com/MateusTum"
                >
                  <GithubIcon width={25} height={25} />
                </a>
              </li>
              <li className="me-3">
                <a
                  className="text-body-secondary"
                  href="https://www.linkedin.com/in/mateus-rosa-tum-7b803a1b6"
                >
                  <LinkedinIcon width={25} height={25} />
                </a>
              </li>
              <li className="me-3">
                <a
                  className="text-body-secondary"
                  href="https://www.instagram.com/mateustum/"
                >
                  <InstagramIcon width={25} height={25} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
  );
}

export default Footer;
