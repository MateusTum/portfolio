import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";
import GithubIcon from "../SVGS/GithubIcon";
import InstagramIcon from "../SVGS/InstagramIcon";
import LinkedinIcon from "../SVGS/LinkedinIcon";
import { Col, Row } from "react-bootstrap";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="border-top">
      <Row className="justify-content-between align-items-center ">
        <Col md={6} className="d-flex align-items-center">
          <span className="ms-3 mb-3 mb-md-0 text-body-secondary">
            © 2024 Mateus Tum
          </span>
        </Col>
        <Col md={6} className="justify-content-end d-flex">
          <ul className="nav">
            <li className="me-3">
              <a className="text-body-secondary" href="https://github.com/MateusTum">
                <GithubIcon width={25} height={25} />
              </a>
            </li>
            <li className="me-3">
              <a className="text-body-secondary" href="https://www.linkedin.com/in/mateus-rosa-tum-7b803a1b6">
                <LinkedinIcon width={25} height={25} />
              </a>
            </li>
            <li className="me-3">
              <a className="text-body-secondary" href="https://www.instagram.com/mateustum/">
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
