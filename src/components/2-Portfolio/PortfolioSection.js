import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
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

const CustomTitle = () => {
  const { t } = useTranslation();
  const [isClicked, setIsClicked] = useState(false);

  // Function to toggle the isClicked state
  const handleRowClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Col
        className={
          isClicked
            ? `${styles.transformX50} ${styles.tab}`
            : `${styles.transformX0} ${styles.tab}`
        }
        onClick={handleRowClick}
      >
        <h2>{t("Portfolio.Title")}</h2>
      </Col>
    </>
  );
};

const ProjectsComponent = ({ inView }) => {
  const categories = ["All", "API", "Frontend", "Backend", "Full Stack"];
  const [activeCategories, setActiveCategories] = useState(["All"]);

  const handleCategoryChange = (category, isChecked) => {
    if (category === "All") {
      if (isChecked) {
        // If "All" is checked, set activeCategories to just "All"
        setActiveCategories(["All"]);
      } else {
        // If "All" is unchecked, clear all selections
        setActiveCategories([]);
      }
    } else {
      if (isChecked) {
        // Add the category to activeCategories, but also remove "All" if it's there
        setActiveCategories(prev => [...prev.filter(cat => cat !== "All"), category]);
      } else {
        // Remove the category from activeCategories
        setActiveCategories(prev => prev.filter(cat => cat !== category));
      }
    }
  };

  const technologyIcons = {
    Bootstrap: BootstrapIcon,
    Django: DjangoIcon,
    HTML: HtmlIcon,
    JavaScript: JSIcon,
    Python: PythonIcon,
    React: ReactIcon,
    Sass: SassIcon,
    PostgreSQL: PostgreeSqlIcon,
    SQLite: SQLiteIcon,
  };

  const projects = [
    {
      id: 0,
      title: "Social",
      categories: ["API", "Frontend", "Backend", "Full Stack"],
      description: "A social media website built on React and Django.",
      link: "/project/0",
      technologies: [
        "JavaScript",
        "Python",
        "React",
        "Django",
        "PostgreSQL",
        "HTML",
        "Bootstrap",
        "Sass",
      ],
    },

    {
      id: 1,
      title: "Facial Recognition App",
      categories: ["API", "Frontend", "Backend", "Full Stack"],
      description:
        "Project made in Python that uses the module face-recognition It is used to analyze surveillance cameras and look for criminals or missing people.",
      link: "/project/1",
      technologies: ["Python", "PostgreSQL"],
    },

    {
      id: 2,
      title: "Isabella Ferreira's Website",
      categories: ["API", "Frontend", "Backend", "Full Stack"],
      description:
        "A website made for a lawyer, containing Sass animations, a form that sends an email, and a blog functionality.",
      link: "/project/2",
      technologies: [
        "JavaScript",
        "Python",
        "React",
        "Django",
        "SQLite",
        "HTML",
        "Bootstrap",
        "Sass",
      ],
    },

    {
      id: 3,
      title: "Task Manager 1.0",
      categories: ["Frontend"],
      description:
        "Basic task manager that creates, updates, and deletes tasks on local storage.",
      link: "/project/3",
      technologies: ["JavaScript", "HTML"],
    },

    {
      id: 4,
      title: "Task Manager API",
      categories: ["API"],
      description:
        "Task Manager API that allows users to log in, and do CRUDE operations on tasks.",
      link: "/project/4",
      technologies: ["Python", "Django"],
    },

    {
      id: 5,
      title: "Flight Deals Searcher",
      categories: ["Backend"],
      description:
        "Python app that does webscrapping to look for flight offers and sends an email if a lower price is available",
      link: "/project/5",
      technologies: ["Python"],
    },

    {
      id: 6,
      title: "Weather Forecast",
      categories: ["Backend"],
      description:
        "Python app that alerts the user via SMS about rain conditions",
      link: "/project/6",
      technologies: ["Python"],
    },

    {
      id: 7,
      title: "Stocks Monitor",
      categories: ["Backend"],
      description:
        "App that alerts the user about changes in stock prices",
      link: "/project/7",
      technologies: ["Python"],
    },
  ];

  // Filter logic

  function checkProjectTechnologies(project) {
    for (let i = 0; i < activeCategories.length; i++) {
      if ((project.categories).includes(activeCategories[i])) {
        return project
      }
    }
  }

  let filteredProjects = null;

  if (activeCategories.includes("All")) {
    filteredProjects = projects
  } else {
    filteredProjects = projects.filter(checkProjectTechnologies)
  }

  return (
    <>
      {/* Filter Buttons */}
      <Row className={inView ? `mx-auto slide-bottom-1` : `mx-auto hidden`}>
        {/* Filter Buttons */}
        <Col lg={6} className={`${styles.filterWrap}`}>
          <div className={`${styles.title}`}>
            <h4>FILTERS</h4>
          </div>
        <Form.Group controlId="formFilterCheckbox" className={`d-flex justify-content-center`}>
          {categories.map((category) => (
            <Form.Check
              className="mx-auto"
              key={category}
              type="checkbox"
              label={category}
              onChange={(e) => handleCategoryChange(category, e.target.checked)}
              checked={activeCategories.includes(category)}
            />
          ))}
          </Form.Group>
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
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <Row className="d-flex justify-content-center my-auto">
                    {project.technologies.map((tech) => {
                      const IconComponent = technologyIcons[tech];
                      return (
                        <Col className="text-center my-1">
                          <IconComponent key={tech} width={25} height={25} />
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
  // const { t, i18n } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.4,
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
          <CustomTitle inView={inView} />
        </Row>
        {/* Projects component */}
        <ProjectsComponent inView={inView} />
      </Container>
    </Container>
  );
};

export default PortfolioSection;
