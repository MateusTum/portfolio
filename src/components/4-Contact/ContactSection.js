import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import styles from "./ContactSection.module.scss";


const ContactSection = () => {
  const { t, i18n } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Container ref={ref} className={`${styles.myWorkBackContainer}`} fluid>
      <Container className={`${styles.myWorkContainer}`}>
        <div className={inView ? `${styles.backgroundShape} slide-right-3` : `${styles.backgroundShape} invisible`} />
        <Row
          className={
            inView
              ? `${styles.aniamatedH2} slide-right-3 mx-auto`
              : `mx-auto invisible`
          }
        >
          <h2>{t("myWorkTitle")}</h2>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactSection;
