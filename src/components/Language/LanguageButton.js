import React, { useEffect } from "react";
import { Dropdown, Image, DropdownButton } from "react-bootstrap";
import styles from "./LanguageButton.module.scss";
import { useTranslation } from "react-i18next";

const LanguageButton = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("language")) {
      i18n.changeLanguage(localStorage.getItem("language"));
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

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
    <DropdownButton
      className={styles.fixeditem}
      title={getLanguageNameWithFlag(i18n.language)}
      variant="dark"
    >
      <Dropdown.Item onClick={() => changeLanguage("en")}>
        <Image
          src={`${process.env.PUBLIC_URL}/images/Flag_of_United_States.png`}
          width={20}
          height={20}
          alt="Brazilian Flag"
        />{" "}
        English
      </Dropdown.Item>
      <Dropdown.Item onClick={() => changeLanguage("pt")}>
        <Image
          src={`${process.env.PUBLIC_URL}/images/Flag_of_Brazil.png`}
          width={20}
          height={20}
          alt="USA Flag"
        />{" "}
        Português
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageButton;
