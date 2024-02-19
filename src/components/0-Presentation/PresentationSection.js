import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./Presentation.module.scss";

const PresentationSection = () => {
  const { t, i18n } = useTranslation();

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // This triggers the animation once the component is mounted
  }, []); // The empty array ensures this effect runs only once after initial mount

  return (
    <Container fluid className={`${styles.presentationBackContainer} px-0`}>
      <div className={`${styles.backgroundShape}`} />
      <Container className={`${styles.presentationContainer}`}>
        <Row className="h-100">
          <Col lg={12} className="mt-5">
            <h1 className={animate ? 'slide-right-1' : ''}>MATEUS TUM</h1>
            <h3 className={animate ? 'slide-right-2' : ''}>DEV</h3>
            <h2 className={animate ? 'slide-right-3' : ''}>FRONTEND</h2>
            <h3 className={animate ? 'slide-right-4' : ''}>REACT</h3>
            <h2 className={animate ? 'slide-right-5' : ''}>BACKEND</h2>
            <h3 className={animate ? 'slide-right-6' : ''}>DJANGO</h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PresentationSection;
