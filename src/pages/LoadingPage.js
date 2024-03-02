import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CloudsSvg from "../components/SVGS/Clouds";
import styles from "./Loading.module.scss";

const LoadingPage = () => {
  return (
    <Container fluid className="mx-0 p-0">
      <div className={`${styles.terminalLoader}`}>
        <div className={`${styles.terminalHeader}`}>
          <div className={`${styles.terminalTitle}`}>Status</div>
          <div className={`${styles.terminalControls}`}>
            <div className={`${styles.control} ${styles['close']}`}></div>
            <div className={`${styles.control} ${styles['minimize']}`}></div>
            <div className={`${styles.control} ${styles['maximize']}`}></div>
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
