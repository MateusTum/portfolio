import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";
import { useInView } from "react-intersection-observer";

// Import cols
import LanguagesCol from "./LanguagesCol";
import FrameworksCol from "./FrameworksCol";
import DatabasesCol from "./DatabasesCol";
import LibsCol from "./LibsCol";

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
      <Row className={`${styles.aboutTitle}`}>
        <Col className={inView ? `${styles.animatedH2}` : "invisible"}>
          <h2>{t("About.Header")}</h2>
        </Col>
      </Row>

      <Container className={`${styles.aboutContainer}`}>
        <Row
          className={`d-flex justify-content-center mx-1 ${styles.aboutRow}`}
        >
          <Col
            lg={3}
            md={12}
            sm={12}
            className={
              inView
                ? `${styles.customDiv} slide-bottom-2 h-100 mt-lg-5 text-center`
                : "invisible"
            }
          >
            <h5>{t("About.About")}</h5>
            <hr />
            <span>Mateus Rosa Tum (Matt), 24</span>
            <br />
            <span>{t("About.From")}</span>
            <h5 className="mt-2">{t("About.WhySoftwareDevelopment")}</h5>
            <hr />
            <p className="text-center">
              {t("About.Journey1")}
              <br />
              {t("About.Journey2")}
            </p>
          </Col>

          <Col
            lg={5}
            md={12}
            sm={12}
            className={
              inView ? `${styles.customDiv} slide-bottom-1` : "invisible"
            }
          >
            <h5 className="text-center">{t("About.WorkWith")}</h5>
            <hr />
            <Row className="my-2 mx-auto w-100">
              <h5 className="text-center">{t("About.Languages")}</h5>
              <Col className="d-flex justify-content-center">
                <LanguagesCol />
              </Col>
            </Row>
            <Row className="my-2 mx-auto">
              <h5 className="text-center">{t("About.Frameworks")}</h5>
              <Col className="d-flex justify-content-center">
                <FrameworksCol />
              </Col>
            </Row>
            <Row className="my-2 mx-auto">
              <h5 className="text-center">{t("About.Libs")}</h5>
              <Col className="d-flex justify-content-center">
                <LibsCol />
              </Col>
            </Row>

            <Row className="my-auto mx-auto">
              <h5 className="text-center">{t("About.Databases")}</h5>
              <Col className="d-flex justify-content-center">
                <DatabasesCol />
              </Col>
            </Row>
          </Col>

          <Col
            lg={3}
            className={
              inView
                ? `slide-bottom-2 ${styles.customDiv} h-100 mt-lg-5`
                : "invisible"
            }
          >
            <h5 className="text-center">{t("About.Speaks")}</h5>
            <hr />
            <ul>
              <li>{t("About.Portuguese")}</li>
              <li>{t("About.English")}</li>
            </ul>

            <h5 className="text-center mt-2">{t("About.Likes")}</h5>
            <hr />
            <ul>
              <li>{t("About.Dota")}</li>
              <li>{t("About.Clay")}</li>
              <li>{t("About.Books")}</li>
              <li>{t("About.Watch")}</li>
              <li>{t("About.RickAndMorty")}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutSection;
