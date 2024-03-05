import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./NavigationBar.module.scss";
import { useLocation, Link } from "react-router-dom";

function NavigationBar() {
  const { t } = useTranslation();
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        className={`${styles.navbar} p-1`}
        fixed="top"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
              {location.pathname !== "/" ? (
                <Nav className="ms-auto me-auto">
                  <Nav.Link
                    as={Link}
                    className={`${styles.navlink}`}
                    to="/"
                  >
                    ← {t("Navbar.Home")}
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav className="ms-auto me-auto">
                  <Nav.Link
                    onClick={() => scrollToSection("presentation")}
                    className={`${styles.navlink}`}
                    to="/"
                  >
                    {t("Navbar.Home")}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => scrollToSection("about")}
                    className={`${styles.navlink}`}
                    to="/"
                  >
                    {t("Navbar.About")}
                  </Nav.Link>
                  <Nav.Link
                    className={`${styles.navlink}`}
                    onClick={() => scrollToSection("portfolio")}
                  >
                    {t("Navbar.Portfolio")}
                  </Nav.Link>
                  <Nav.Link
                    className={`${styles.navlink}`}
                    onClick={() => scrollToSection("concepts")}
                  >
                    {t("Navbar.Concepts")}
                  </Nav.Link>
                  </Nav>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
