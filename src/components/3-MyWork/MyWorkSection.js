import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import styles from "./MyWork.module.scss";

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
            : `${styles.tab} ${styles.transformX0}`
        }
        onClick={handleRowClick}
      >
        <h2>{t("MyWork.Title")}</h2>
      </div>
    </>
  );
};

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Container ref={ref} className={`${styles.myWorkBackContainer}`} fluid>
      <div className={inView ? `slideTitleAnimation` : `hidden`}>
        <CustomTitle />
      </div>

      <Container className={`${styles.myWorkContainer}`}></Container>
    </Container>
  );
};

export default ProjectsSection;
