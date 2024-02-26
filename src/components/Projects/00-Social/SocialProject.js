import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "../Projects.module.scss"

function SocialProject() {
  const { t, i18n } = useTranslation();

  return (
    <Container 
    className={`${styles.projectBackContainer}`}
    fluid>
      <Row>
        <Col>
        <h1>
          Social App
        </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialProject;
