import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./NavigationBar.module.scss";
// import { Link } from "react-router-dom";

function NavigationBar() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("language")) {
      i18n.changeLanguage(localStorage.getItem("language"));
    } else {
      i18n.changeLanguage("en");
    }
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const getLanguageNameWithFlag = (languageCode) => {
    switch (languageCode) {
      case "en":
        return (
          <Image
            src={`${process.env.PUBLIC_URL}/images/Flag_of_United_States.png`}
            width={20}
            height={20}
            alt="Brazilian Flag"
          />
        );
      case "pt":
        return (
          <Image
            src={`${process.env.PUBLIC_URL}/images/Flag_of_Brazil.png`}
            width={20}
            height={20}
            alt="USA Flag"
          />
        );
      default:
        return "🌐 Language";
    }
  };

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
            <Nav className="ms-auto">
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
              {/* <Nav.Link onClick={() => scrollToSection('contact')} className={`${styles.navlink}`} to="/">
                {t("Navbar.Contact")}
              </Nav.Link> */}
            </Nav>

            {/* Change language dropdown */}
            <NavDropdown
              className={`ms-auto`}
              title={getLanguageNameWithFlag(i18n.language)}
            >
              <NavDropdown.Item onClick={() => changeLanguage("en")}>
                <Image
                  src={`${process.env.PUBLIC_URL}/images/Flag_of_United_States.png`}
                  width={20}
                  height={20}
                  alt="Brazilian Flag"
                />{" "}
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage("pt")}>
                <Image
                  src={`${process.env.PUBLIC_URL}/images/Flag_of_Brazil.png`}
                  width={20}
                  height={20}
                  alt="USA Flag"
                />{" "}
                Português
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
