import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./Presentation.module.scss";

const PresentationSection = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // This will be set to true after the component mounts
  }, []); // The empty dependency array ensures this effect runs only once after initial mount

  return (
    // Main container
    <Container
      id="presentation"
      fluid
      className={`${styles.presentationBackContainer} px-0`}
    >
            <div className={styles.cubeWrapper}>
        <div className={styles.scene}>
          <div className={styles.cube}>
            <div className={`${styles.face} ${styles.front}`}></div>
            <div className={`${styles.face} ${styles.back}`}></div>
            <div className={`${styles.face} ${styles.right}`}></div>
            <div className={`${styles.face} ${styles.left}`}></div>
            <div className={`${styles.face} ${styles.top}`}></div>
            <div className={`${styles.face} ${styles.bottom}`}></div>
          </div>
        </div>
      </div>
      {/* Sub container */}
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
          {/* Presentation text row */}
          <Row className="mx-auto">
            <Col lg={10} md={12} sm={12} className="mt-5">

              {/* Mateus Tum */}
              <Col 
              lg={12}
              className={animate ? `${styles.slideAnimatedName}` : ``}>
                <h1 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;Mateus Tum&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;Mateus Tum&nbsp;</span>
                </h1>
              </Col>

              {/* Occupation */}
              <Col 
              lg={12}
              md={12}
              sm={12}
              className={animate ? `slide-right-2` : ``}>
                                  
                <h3 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;{t("Presentation.Occupation")}&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;{t("Presentation.Occupation")}&nbsp;</span>
                </h3>
              </Col>

              {/* Front */}
              <Col 
              lg={6}
              className={animate ? `slide-right-3` : ``}>
                <h2 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;FRONTEND&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;FRONTEND&nbsp;</span>
                </h2>
              </Col>

              {/* React */}
              <Col 
              lg={6}
              className={animate ? `slide-right-4` : ``}>
                <h3 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;REACT&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;REACT&nbsp;</span>
                </h3>
              </Col>

              {/* Back */}
              <Col 
              lg={6}
              className={animate ? `slide-right-5` : ``}>
                <h2 className={`${styles.customName}`} data-text="Awesome">
                  <span className={`${styles.actualText}`}>&nbsp;BACKEND&nbsp;</span>
                  <span aria-hidden="true" className={`${styles.nameHover}`}>&nbsp;BACKEND&nbsp;</span>
                </h2>
              </Col>

              {/* Django */}
              <Col 
              lg={6}
              className={animate ? `slide-right-6` : ``}>
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
