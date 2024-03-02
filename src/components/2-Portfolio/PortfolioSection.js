import React, { useState, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import styles from "./Portfolio.module.scss";
import tiles from "./Tiles.module.scss";

import Icons from "../SVGS/Icons"

import SearchFilter from "./SearchFilter";
import projects from "./data/projects.json"; // Adjust the path as necessary

const ProjectsComponent = ({ inView }) => {
  const [filters, setFilters] = useState({ include: [], exclude: [] });

  const TechnologyIcon = ({ tech }) => {
    const IconComponent = Icons[tech];
    return IconComponent ? <IconComponent width={25} height={25} /> : null;
  };

  const filterProjects = useCallback(
    (project) => {
      const { include, exclude } = filters;
      const { technologies } = project;
      if (exclude.some((tech) => technologies.includes(tech))) return false;
      if (include.some((tech) => !technologies.includes(tech))) return false;
      if (
        include.length === 0 ||
        include.some((tech) => technologies.includes(tech))
      )
        return true;
      return false;
    },
    [filters]
  );

  const filteredProjects = useMemo(
    () => projects.filter(filterProjects),
    [filterProjects]
  );

  function handleFilters(nextState, itemName) {
    function clearFilters(itemName) {
      setFilters((prevFilters) => ({
        include: prevFilters.include.filter((item) => item !== itemName),
        exclude: prevFilters.exclude.filter((item) => item !== itemName),
      }));
    }

    clearFilters(itemName);

    if (nextState === "include") {
      setFilters((prevFilters) => ({
        include: [...prevFilters.include, itemName],
        exclude: prevFilters.exclude,
      }));
    } else if (nextState === "exclude") {
      setFilters((prevFilters) => ({
        include: prevFilters.include,
        exclude: [...prevFilters.exclude, itemName],
      }));
    }
  }

  return (
    <>
      {/* Filter Buttons */}
      <Row className={inView ? `mx-auto slide-bottom-1` : `mx-auto hidden`}>
        {/* Filter Buttons */}
        <Col lg={8} className={`${styles.filterWrap}`}>
          <div className={`${styles.title}`}>
            <h4>FILTERS</h4>
          </div>
          <Row className="align-items-center">
            {Object.keys(Icons).map((key) => (
              <SearchFilter handleFilters={handleFilters} itemName={key} />
            ))}
          </Row>
        </Col>
      </Row>

      {/* Project Cards */}
      {/* Main Row for projects */}
      <Row className={`${tiles.tilesWrap} d-flex justify-content-center`}>
        {filteredProjects.map((project) => (
          <Col key={project.id} className="mx-auto px-0">
            <Link to={project.link}>
              <div className={inView ? `slide-bottom-1` : `hidden`}>
                <li>
                  <h2>{`0` + project.id}</h2>
                  <h3>{project.title} <TechnologyIcon tech={"ArrowUpRight"} width={15} height={15}/></h3>
                  <p>{project.description}</p>

                  <Row className="d-flex justify-content-center my-auto">
                    {project.technologies.map((tech) => {
                      return (
                        <Col className="text-center my-1">
                          <TechnologyIcon key={tech} tech={tech} width={25} height={25} />
                        </Col>
                      );
                    })}
                  </Row>
                </li>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

const PortfolioSection = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Container
      id="portfolio"
      ref={ref}
      className={`${styles.portfolioBackContainer}`}
      fluid
    >
      <Container className={`${styles.portfolioContainer}`}>
        {/* Portfolio title div*/}
        <Row className={inView ? `slideTitleAnimation mx-auto` : `hidden`}>
        <Col
        className={`${styles.tab}`}
        >
        <h2>{t("Portfolio.Title")}</h2>
      </Col>
        </Row>
        {/* Projects component */}
        <ProjectsComponent inView={inView} />
      </Container>
    </Container>
  );
};

export default PortfolioSection;
