import React, { useState, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import styles from "./Contact.module.scss";

const contactSection = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Container
      id="contact"
      ref={ref}
      className={`${styles.contactBackContainer}`}
      fluid
    >
      <Container className={`${styles.contactContainer}`}>
        {/* Portfolio title div*/}
        <Row className={inView ? `slideTitleAnimation mx-auto` : `hidden`}>
          <Col className={`${styles.tab}`}>
            <h2>{t("Contact.Title")}</h2>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ConceptsSection;
