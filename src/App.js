import "./App.css";
import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Projects from "./pages/ProjectsPage";
import NavigationBar from "./components/Navigation/NavigationBar";
import { useTranslation } from "react-i18next";
import LoadingPage from "./LoadingPage";

function App() {
  // Need to fix the language to not refresh everytime
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const languageToUse = savedLanguage || "defaultLanguageCode"; // Replace 'defaultLanguageCode' with your default language code
    i18n.changeLanguage(languageToUse);

    const loadData = async () => {
      // Perform asynchronous operations here (e.g., API requests)
      // For demonstration, we'll just use a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds

      setIsLoading(false); // Update loading state to false after loading is complete
    };

    loadData();
  }, [i18n]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HashRouter basename="/">
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* Add more routes as needed */}
      </Routes>
    </HashRouter>
  );
}

export default App;
