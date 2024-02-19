import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./NavigationBar.module.scss";
// import { Link } from "react-router-dom";

function NavigationBar() {
  const { t, i18n } = useTranslation();

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

  return (
    <header>
      <Navbar data-bs-theme="dark" className={`${styles.navbar} p-0`} fixed="top" >
        <Container>
          <Nav className="ms-auto">
            <Nav.Link className={`${styles.navlink}`} href="#home">
              {t("home")}
            </Nav.Link>
            <Nav.Link className={`${styles.navlink}`} href="#about">
              {t("about")}
            </Nav.Link>
            <Nav.Link className={`${styles.navlink}`} href="#skills">
              {t("myWork")}
            </Nav.Link>
            <Nav.Link className={`${styles.navlink}`} href="#projects">
              {t("portfolio")}
            </Nav.Link>
            <Nav.Link className={`${styles.navlink}`} href="#contact">
              {t("contact")}
            </Nav.Link>
          </Nav>
          <NavDropdown
            className="ms-auto"
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
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
