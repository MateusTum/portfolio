import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./Presentation.module.scss";
import { useInView } from "react-intersection-observer";

const PresentationSection = () => {
  const { t, i18n } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setAnimate(true); // This will be set to true after the component mounts
  }, []); // The empty dependency array ensures this effect runs only once after initial mount

  return (
    <Container
      ref={ref}
      fluid
      className={`${styles.presentationBackContainer} px-0`}
    >
        <Container
          className={`${styles.presentationContainer}`}
          style={{
            zIndex: 2,
            position: "relative",
            right: `0%`,
            top: `0%`,
            justifyContent: "center",
            transition: "transform 1s ease-in-out", // Apply transition to transform property
          }}
        >
          <Row className="mx-auto">
            <Col lg={10} md={12} sm={12} className="mt-5">
              <Col 
              lg={12}
              className={animate ? `${styles.slideAnimatedName}` : ``}>
                <h1 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;Mateus Tum&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;Mateus Tum&nbsp;</span>
                </h1>
              </Col>
              <Col 
              lg={12}
              md={12}
              sm={12}
              className={animate ? `${styles.slideAnimatedName}` : ``}>
                                  
                <h3 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;{t("Presentation.Occupation")}&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;{t("Presentation.Occupation")}&nbsp;</span>
                </h3>
              </Col>
              <Col 
              lg={6}
              className={animate ? `${styles.slideAnimatedName}` : ``}>
                <h2 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;FRONTEND&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;FRONTEND&nbsp;</span>
                </h2>
              </Col>
              <Col 
              lg={6}
              className={animate ? `${styles.slideAnimatedName}` : ``}>
                <h3 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;REACT&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;REACT&nbsp;</span>
                </h3>
              </Col>
              <Col 
              lg={6}
              className={animate ? `${styles.slideAnimatedName}` : ``}>
                <h2 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;BACKEND&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;BACKEND&nbsp;</span>
                </h2>
              </Col>
              <Col 
              lg={6}
              className={animate ? `${styles.slideAnimatedName}` : ``}>
                <h3 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;DJANGO&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;DJANGO&nbsp;</span>
                </h3>
              </Col>
            </Col>
          </Row>
        </Container>
    </Container>
  );
};

export default PresentationSection;
