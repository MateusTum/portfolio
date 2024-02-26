import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./Presentation.module.scss";
import { useInView } from "react-intersection-observer";

const PresentationSection = () => {
  const { t, i18n } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  function ScrollMovingDiv() {
    const [topPosition, setTopPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 150) {
          setTopPosition(500);
        } else {
          setTopPosition(0);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <>
      <div className={`${styles.rhombus3}`} />

      {/* Colorful bar */}
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            right: `0px`,
            top: `0px`,
            width: "140%",
            height: "140%",
            clipPath: "polygon(75% 0%, 80% 0%, 25% 100%, 20% 100%)",
            background:
              "linear-gradient(90deg, rgba(255, 0, 0, 1), rgba(0, 0, 255, 1))",
            transition: "transform 1s ease-in-out", // Apply transition to transform property
            transform: `translate(-${topPosition}px, -${topPosition}px)`, // Use transform property for animation
          }}
        />


          {/* Blackbackground */}
        <div
          style={{
            zIndex: 1,
            position: "absolute",
            right: `0px`,
            top: `0px`,
            width: "140%",
            height: "140%",
            background: "rgb(0, 0, 0)",
            clipPath: "polygon(0 0, 80% 0%, 20% 100%, 0% 100%)",
            transition: "transform 1s ease-in-out", // Apply transition to transform property
            transform: `translate(-${topPosition}px, -${topPosition}px)`, // Use transform property for animation
          }}
        />


        <Container
          className={`${styles.presentationContainer}`}
          style={{
            zIndex: 1,
            position: "absolute",
            right: `0px`,
            top: `0px`,
            width: "100%",
            height: "100%",
            transition: "transform 1s ease-in-out", // Apply transition to transform property
            transform: `translate(-${topPosition}px, -${topPosition}px)`, // Use transform property for animation
          }}
        >
          <Row className="h-100">
            <Col lg={6} className="mt-5">
              <Col className={`${styles.hoverAnimation}`}>
                <h1 className={animate ? `${styles.slideAnimatedName}` : ``}>
                  MATEUS TUM (WIP)
                </h1>
              </Col>
              <Col lg={6} className={`${styles.hoverAnimation}`}>
                <h3 className={animate ? "slide-right-2" : ""}>
                  {t("Presentation.Occupation")}
                </h3>
              </Col>
              <Col lg={6} className={`${styles.hoverAnimation}`}>
                <h2 className={animate ? "slide-right-3" : ""}>FRONTEND</h2>
              </Col>
              <Col lg={6} className={`${styles.hoverAnimation}`}>
                <h3 className={animate ? "slide-right-4" : ""}>REACT</h3>
              </Col>
              <Col lg={6} className={`${styles.hoverAnimation}`}>
                <h2 className={animate ? "slide-right-5" : ""}>BACKEND</h2>
              </Col>
              <Col lg={6} className={`${styles.hoverAnimation}`}>
                <h3 className={animate ? "slide-right-6" : ""}>DJANGO</h3>
              </Col>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  useEffect(() => {
    setAnimate(true); // This will be set to true after the component mounts
  }, []); // The empty dependency array ensures this effect runs only once after initial mount

  return (
    <Container
      ref={ref}
      fluid
      className={`${styles.presentationBackContainer} px-0`}
    >
      <div
            className={
              inView
                ? `${styles.animatedPicture}`
                : `invisible`
            }
          >
            <Image
              src={`${process.env.PUBLIC_URL}/images/aipic.png`}
              className="img-fluid"
              width={"100%"}
              height={"auto"}
              alt="Description of the Pic"
            />
          </div>
      <ScrollMovingDiv />
      <div className={`${styles.backgroundFilter}`} />
      <div className={`${styles.backgroundGif}`}>
        <Image
          src={`${process.env.PUBLIC_URL}/images/Coding.gif`}
          className="h-100"
          width={"100%"}
          height={"90%"}
          alt="GIF Showing a lot of random code"
        />
      </div>
    </Container>
  );
};

export default PresentationSection;
