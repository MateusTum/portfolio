import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CloudsSvg from "../components/SVGS/Clouds";

const LoadingPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="text-center">
        <CloudsSvg />
          <h1 class="loadingH1">Loading page</h1>
        </Col>
      </Row>
    </Container>
  ); // Display loading indicator while loading
};

export default LoadingPage;
