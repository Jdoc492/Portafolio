import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { BannerJose } from './components/Jose';
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { JobExperiencie } from './components/jobExperiencie';

export const idiomaContex = React.createContext();

function App() {
  const [languageSwitched, setLanguageSwitched] = useState(false);
  const { t, i18n } = useTranslation("global");

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguageSwitched(!languageSwitched);
  };

  return (
    <>
      <idiomaContex.Provider value={t}>
        <NavBar />
        <Banner />
        <BannerJose />
        <Skills />
        <JobExperiencie/>
        <Projects />
        
        <Contact />
        <Footer />
      </idiomaContex.Provider>
    </>
  )
}

export default App;
