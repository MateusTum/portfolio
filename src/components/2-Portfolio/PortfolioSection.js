import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import styles from "./Portfolio.module.scss";
import tiles from "./Tiles.module.scss";

import BootstrapIcon from "../SVGS/BootstrapIcon";
import DjangoIcon from "../SVGS/DjangoIcon";
import HtmlIcon from "../SVGS/HtmlIcon";
import JSIcon from "../SVGS/JavaScriptIcon";
import PythonIcon from "../SVGS/PythonIcon";
import ReactIcon from "../SVGS/ReactIcon";
import SassIcon from "../SVGS/SassIcon";
import PostgreeSqlIcon from "../SVGS/PostgreeSqlIcon";
import SQLiteIcon from "../SVGS/SQLiteIcon";


const CustomTitle = ({ inView }) => {
  const { t, i18n } = useTranslation();
  const [isClicked, setIsClicked] = useState(false);

  // Function to toggle the isClicked state
  const handleRowClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div
        className={
          isClicked
            ? `${styles.transformX50} ${styles.tab}`
            : `${styles.transformX0} ${styles.tab}`
        }
        onClick={handleRowClick}
      >
        <h2>{t("Portfolio.Title")}</h2>
      </div>
    </>
  );
};

const PortfolioSection = () => {
  // const { t, i18n } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Container 
    id="portfolio"
    ref={ref} 
    className={`${styles.portfolioBackContainer}`} fluid>

      <Container className={`${styles.portfolioContainer}`}>

        {/* Portfolio title div*/}
      <Row className={inView ? `slideTitleAnimation` : `hidden`}>
        <CustomTitle inView={inView} />
      </Row>
        {/* Main Row for projects */}
        <Row className={`${tiles.tilesWrap} d-flex justify-content-center`}>
          {/* Project  00 */}
          <Col className="mx-auto">
            <Link to={"/project/0"}>
              <div className={inView ? `slide-bottom-1` : `hidden`}>
                <li>
                  <h2>00</h2>
                  <h3>Social App</h3>
                  <p>A social media website built on React and Django.</p>
                  <Row className="d-flex justify-content-center my-auto">
                    <Col className="text-center my-1">
                      <JSIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <PythonIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <ReactIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <DjangoIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <PostgreeSqlIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <HtmlIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <BootstrapIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <SassIcon width={25} height={25} />
                    </Col>
                  </Row>
                </li>
              </div>
            </Link>
          </Col>

          {/* Project 01 */}
          <Col className="mx-auto">
            <Link to={"/project/1"}>
              <div className={inView ? `slide-bottom-1` : `hidden`}>
                <li>
                  <h2>01</h2>
                  <h3>Facial Recognition App</h3>
                  <p>
                    Project made in Python that uses the module
                    'face-recognition'.
                    <br />
                    It is used to analyze surveillance cameras and look for
                    criminals or missing people.
                  </p>
                  <Row className="d-flex justify-content-center my-auto">
                    <Col className="text-center my-1">
                      <PythonIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <DjangoIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <PostgreeSqlIcon width={25} height={25} />
                    </Col>
                  </Row>
                </li>
              </div>
            </Link>
          </Col>

          {/* Project 02 */}
          <Col className="mx-auto">
            <Link to={"/project/2"}>
              <div className={inView ? `slide-bottom-2` : `hidden`}>
                <li>
                  <h2>02</h2>
                  <h3>Isabella Ferreira Website</h3>
                  <p>
                    A website made for a lawyer, containing SCSS animations, a
                    form that sends an email, and a blog functionality.
                  </p>
                  <Row className="d-flex justify-content-center my-auto">
                    <Col className="text-center my-1">
                      <JSIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <PythonIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <ReactIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <DjangoIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <SQLiteIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <HtmlIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <BootstrapIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <SassIcon width={25} height={25} />
                    </Col>
                  </Row>
                </li>
              </div>
            </Link>
          </Col>

          {/* Project 03 */}
          <Col className="mx-auto">
            <Link to={"/project/3"}>
              <div className={inView ? `slide-bottom-3` : `hidden`}>
                <li>
                  <h2>03</h2>
                  <h3>Task Manager</h3>
                  <p>A web app to create, update and track daily tasks.</p>
                  <Row className="d-flex justify-content-center my-auto">
                    <Col className="text-center my-1">
                      <JSIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <PythonIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <ReactIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <DjangoIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <SQLiteIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <HtmlIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <BootstrapIcon width={25} height={25} />
                    </Col>
                    <Col className="text-center my-1">
                      <SassIcon width={25} height={25} />
                    </Col>
                  </Row>
                </li>
              </div>
            </Link>
          </Col>

          {/* Project 04 */}
          <Col className="mx-auto">
            <Link to={"/project/4"}>
              <div className={inView ? `slide-bottom-4` : `hidden`}>
                <li>
                  <h2>04</h2>
                  <h3>Project ###</h3>
                  <p>########</p>
                </li>
              </div>
            </Link>
          </Col>

        </Row>

      </Container>
      
    </Container>
  );
};

export default PortfolioSection;
