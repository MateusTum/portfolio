import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function NavigationBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const getLanguageNameWithFlag = (languageCode) => {
    switch (languageCode) {
      case "en":
        return "🇺🇸";
      case "pt":
        return "🇧🇷";
      default:
        return "🌐 Language";
    }
  };

  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">{t("home")}</Nav.Link>
            <Nav.Link href="#about">{t("about")}</Nav.Link>
            <Nav.Link href="#skills">{t("skills")}</Nav.Link>
            <Nav.Link href="#projects">{t("projects")}</Nav.Link>
            <Nav.Link href="#contact">{t("contact")}</Nav.Link>
            <NavDropdown
              title={getLanguageNameWithFlag(i18n.language)}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => changeLanguage("en")}>
                🇺🇸 English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage("pt")}>
                🇧🇷 Português
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
