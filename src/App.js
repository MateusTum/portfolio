import "./App.css";
import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/HomePage";
import Projects from './pages/ProjectsPage';
import NavigationBar from "./components/Navigation/NavigationBar";
import { useTranslation } from 'react-i18next';

function App() {
  // Need to fix the language to not refresh everytime
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const languageToUse = savedLanguage || 'defaultLanguageCode'; // Replace 'defaultLanguageCode' with your default language code
    i18n.changeLanguage(languageToUse).then(() => {
      setLoading(false); // Set loading to false after language is set
    });
  }, [i18n]);

  if (loading) {
    return <div className="loader"></div>; // Display loading message or spinner
  }

  return (
    <HashRouter basename="/">
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects />} />
        {/* Add more routes as needed */}
      </Routes>
    </HashRouter>
  );
}

export default App;
