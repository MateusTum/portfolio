import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";
import { useInView } from "react-intersection-observer";
import BootstrapIcon from "../SVGS/BootstrapIcon";
import DjangoIcon from "../SVGS/DjangoIcon";
import HtmlIcon from "../SVGS/HtmlIcon";
import JSIcon from "../SVGS/JavaScriptIcon";
import PythonIcon from "../SVGS/PythonIcon";
import ReactIcon from "../SVGS/ReactIcon";
import FlaskIcon from "../SVGS/FlaskIcon";
import SassIcon from "../SVGS/SassIcon";
import CssIcon from "../SVGS/CssIcon";
import PostgreeSqlIcon from "../SVGS/PostgreeSqlIcon";
import SQLiteIcon from "../SVGS/SQLiteIcon";

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Container
      fluid
      ref={ref}
      className={`${styles.aboutBackContainer} p-0 m-0`}
    >
      <div className={`${styles.rhombus1}`} />
      <div className={`${styles.rhombus2}`} />
      <div className={`${styles.rhombus3}`} />
      <div className={`${styles.aboutTitle}`}>
        <div className={inView ? `${styles.animatedH2}` : "invisible"}>
          <h2>about(Mateus)</h2>
        </div>
      </div>

      <Container className={`${styles.aboutContainer}`}>
        <Row
          className={`d-flex justify-content-center mx-auto ${styles.aboutRow}`}
        >
          <Col
            lg={3}
            className={
              inView
                ? `slide-bottom-2 ${styles.customDiv} h-100 mt-5`
                : "invisible"
            }
          >
            <h5 className="text-center">WHO AM I</h5>
            <hr />
            Mateus Rosa Tum (Matt)
            <br />
            24, from Jataí - Goiás - Brazil
            <h5 className="text-center mt-2">WHY SOFTWARE DEVELOPMENT</h5>
            <hr />
            <p>
              My software development journey began after living some time in
              the USA.
              <br />
              When i returned to Brazil on mid 2023, I decided to study the vast
              world of programming.
            </p>
          </Col>

          <Col
            lg={5}
            className={
              inView ? `slide-bottom-1 ${styles.customDiv}` : "invisible"
            }
          >
            <h5 className="text-center">I WORK WITH</h5>
            <hr />
            <Row className="d-flex justify-content-center my-auto">
              <h5 className="text-center">THESE LANGUAGES</h5>
              <Col lg={2} className="text-center m-1">
                <JSIcon width={40} height={40} />
              </Col>

              <Col lg={2} className="text-center m-1">
                <HtmlIcon width={40} height={40} />
              </Col>

              <Col lg={2} className="text-center m-1">
                <SassIcon width={40} height={40} />
              </Col>

              <Col lg={2} className="text-center m-1">
                <CssIcon width={40} height={40} />
              </Col>

              <Col lg={2} className="text-center m-1">
                <PythonIcon width={40} height={40} />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center my-2">
              <h5 className="text-center">THESE FRAMEWORKS</h5>
              <Col lg={2} className="text-center m-1">
                <DjangoIcon width={40} height={40} />
              </Col>
              <Col lg={2} className="text-center m-1">
                <FlaskIcon width={40} height={40} />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center my-auto">
              <h5 className="text-center">THESE LIBS</h5>
              <Col lg={2} className="text-center m-1">
                <ReactIcon width={40} height={40} />
              </Col>
              <Col lg={2} className="text-center m-1">
                <BootstrapIcon width={40} height={40} />
              </Col>
            </Row>

            <Row className="d-flex justify-content-center my-2">
              <h5 className="text-center">THESE DATABASES</h5>
              <Col lg={2} className="text-center m-1">
                <PostgreeSqlIcon width={40} height={40} />
              </Col>
              <Col lg={2} className="text-center m-1">
                <SQLiteIcon width={55} height={40} />
              </Col>
            </Row>
          </Col>

          <Col
            lg={3}
            className={
              inView
                ? `slide-bottom-2 ${styles.customDiv} h-100 mt-5`
                : "invisible"
            }
          >
            <h5 className="text-center">I SPEAK</h5>
            <hr />
            <ul>
              <li>Brazilian Portuguese - Native</li>
              <li>English - Fluent</li>
            </ul>

            <h5 className="text-center mt-2">I LIKE TO</h5>
            <hr />
            <ul>
              <li>Play Dota</li>
              <li>Do clay sculpting</li>
              <li>Read books</li>
              <li>Watch Fantasy/Sci-Fi movies</li>
              <li>And i love Rick and Morty</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutSection;
