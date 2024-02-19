import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
  const { t, i18n } = useTranslation();

  return (
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col md={8} lg={6}>
          <h2>
                Skills
            </h2>

          </Col>
        </Row>
      </Container>
  );
};

export default SkillsSection;