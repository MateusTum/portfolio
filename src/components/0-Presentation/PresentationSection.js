import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const PresentationSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="hero-section"
      style={{
        height: "100vh",
        color: "#fff",
      }}
    >
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col md={8} lg={6}>
            <h1>Mateus Tum</h1>
            <p>{t("description")}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PresentationSection;
