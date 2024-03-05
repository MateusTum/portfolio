import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import styles from "./Concepts.module.scss";

const ConceptsSection = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Container
      id="concepts"
      ref={ref}
      className={`${styles.conceptsBackContainer}`}
      fluid
    >
      <Container className={`${styles.conceptsContainer}`}>
        {/* Portfolio title div*/}
        <Row className={inView ? `slideTitleAnimation mx-auto` : `hidden`}>
          <Col className={`${styles.tab}`}>
            <h2>{t("Concepts.Title")}</h2>
          </Col>
        </Row>

        <Row
          className={`${styles.projectRow} mx-auto justify-content-center mb-5`}
        >
          <Col
            lg={12}
            md={12}
            sm={12}
            className="d-flex justify-content-center"
          >
            <h4 className={`${styles.about} px-4`}>About this section</h4>
          </Col>
          <Col 
          lg={12} 
          md={12} 
          sm={12}
          className="text-center"
          >
            <span>
              This is an area to display my concepts. These concepts may or may not be developed into further detail.
            </span>

          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ConceptsSection;
