import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CloudsSvg from "../components/SVGS/Clouds";
import './Loading.scss';

const LoadingPage = () => {
  return (
    <Container fluid className="mx-0 p-0">
      <div class="terminal-loader">
          <div class="terminal-header">
            <div class="terminal-title">Status</div>
            <div class="terminal-controls">
              <div class="control close"></div>
              <div class="control minimize"></div>
              <div class="control maximize"></div>
            </div>
          </div>
          <div class="text">Loading...</div>
        </div>
      <Row>
        <Col className="text-center">
        <CloudsSvg />
        </Col>
      </Row>
    </Container>
  ); // Display loading indicator while loading
};

export default LoadingPage;
