import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Projects.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import layout from "./styles.module.scss";
import Icons from "../components/SVGS/Icons";
import projects from "../components/data/projects.json";

const BaseLayout = ({ projectId }) => {
    const project = projects[projectId];
    console.log(projectId);

    const TechnologyIcon = ({ tech, width, height }) => {
      const IconComponent = Icons[tech];
      return IconComponent ? (
        <IconComponent width={width} height={height} />
      ) : null;
    };

    return (
        <Container className={`${layout.pageContainer}`}>
      {/* Title */}
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className={`${layout.title}`}>{project.title}</h1>
          <div className={`${layout.versionWrapper}`}>
            <h2 className={`${layout.version}`}>{project.version}</h2>
          </div>
        </Col>
      </Row>

      {/* Content */}
      <Row
        className={`${layout.projectRow} ${layout.techRow} mx-auto justify-content-center mb-5`}
      >
        <Col lg={12} md={12} sm={12} className="d-flex justify-content-center">
          <h4 className={`${layout.about} px-4`}>Technologies</h4>
        </Col>
        <Row className={`d-flex justify-content-center text-center`}>
          {project.technologies.map((tech) => {
            return (
              <Col>
                <TechnologyIcon tech={tech} width={35} height={35} />
              </Col>
            );
          })}
        </Row>
      </Row>

      <Row
        className={`${layout.projectRow} ${layout.aboutRow} mx-auto justify-content-center`}
      >
        <Col lg={12} md={12} sm={12} className="d-flex justify-content-center">
          <h4 className={`${layout.about} px-4`}>About</h4>
        </Col>
        <Col lg={12} className="text-center">
          <span className={`${layout.aboutText}`}>
            {project.about}
          </span>
        </Col>
      </Row>
    </Container>
    )
}


const Project = () => {
  const { projectId } = useParams();

  return (
    <Container className={`${styles.projectBackContainer}`} fluid>
      <BaseLayout projectId={projectId} />
    </Container>
  );
};
export default Project;
