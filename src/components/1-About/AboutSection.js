import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.scss";

// Import individual components
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
      id="about"
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

      <Container className={`${styles.aboutContainer} mx-auto`}>
        {/* Main Row */}
        <Row
          className={`d-flex justify-content-center mx-1 ${styles.aboutRow}`}
        >
          {/* #1 col */}
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
            <div className={`${styles.title}`}>
              <h5 className="my-auto">{t("About.About")}</h5>
            </div>

            <p className="text-center pb-2">
              Mateus Rosa Tum (Matt), 24
              <br />
              {t("About.From")}
            </p>

            <div className={`${styles.title} mt-4`}>
              <h5 className="mt-2">{t("About.WhySoftwareDevelopment")}</h5>
            </div>
            <p className="text-center">
              {t("About.Journey1")}
              <br />
              {t("About.Journey2")}
            </p>
          </Col>

          {/* #2 col */}
          <Col
            lg={5}
            md={12}
            sm={12}
            className={
              inView ? `${styles.customDiv} slide-bottom-1` : "invisible"
            }
          >
            <div className={`${styles.title}`}>
              <h5 className="text-center my-auto">{t("About.WorkWith")}</h5>
            </div>
            <Row className="mx-auto w-100 justify-content-center">
              <div
                className={`${styles.svgsBackground} d-flex justify-content-center`}
              >
                <div className={`${styles.techTitle}`}>
                  <h5 className="text-center">{t("About.Languages")}</h5>
                </div>
                <LanguagesCol />
              </div>
            </Row>

            <Row className="my-4 mx-auto justify-content-center">
              <div
                className={`${styles.svgsBackground} d-flex justify-content-center`}
              >
                <div className={`${styles.techTitle}`}>
                  <h5 className="text-center">{t("About.Frameworks")}</h5>
                </div>
                <FrameworksCol />
              </div>
            </Row>

            <Row className="my-4 mx-auto justify-content-center">
              <div
                className={`${styles.svgsBackground} d-flex justify-content-center`}
              >
                <div className={`${styles.techTitle}`}>
                  <h5 className="text-center">{t("About.Libs")}</h5>
                </div>
                <LibsCol />
              </div>
            </Row>

            <Row className="my-4 mx-auto justify-content-center">
              <div
                className={`${styles.svgsBackground} d-flex justify-content-center`}
              >
                <div className={`${styles.techTitle}`}>
                  <h5 className="text-center">{t("About.Databases")}</h5>
                </div>
                <DatabasesCol />
              </div>
            </Row>
          </Col>

          {/* #3 col */}
          <Col
            lg={3}
            className={
              inView
                ? `slide-bottom-2 ${styles.customDiv} h-100 mt-lg-5`
                : "invisible"
            }
          >
            <div className={`${styles.title}`}>
              <h5 className="text-center my-auto">{t("About.Speaks")}</h5>
            </div>
            <ul className="pb-2">
              <li>{t("About.Portuguese")}</li>
              <li>{t("About.English")}</li>
            </ul>

            <div className={`${styles.title} mt-4`}>
              <h5 className="text-center my-auto">{t("About.Likes")}</h5>
            </div>
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
