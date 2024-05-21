import React from 'react';
import js from "../assets/img/js(1).png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import react from "../assets/img/react.png";
import php from "../assets/img/php.png";
import git from "../assets/img/git.png";
import appscript from "../assets/img/appscript.png";
import appsheet from "../assets/img/appsheet.png";
import Carousel from 'react-multi-carousel';
import mysql from "../assets/img/mysql.png";
import bootstrap from "../assets/img/bootstrap.png";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { useTranslation } from "react-i18next";
import { idiomaContex } from '../App';
import { useState, useContext } from "react";

export const Skills = () => {

  const { t, i18n } = useTranslation("global");
  // const languageContext = useContext(idiomaContex);

  // const toggleLanguage = () => {
  //   const newLanguage = i18n.language === "en" ? "es" : "en";
  //   i18n.changeLanguage(newLanguage);
  // };


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{t("skills.skills")}</h2>
              <p>{t("skills.text-skills")}</p>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={400} keyBoardControl={true}  className="owl-carousel owl-theme skill-slider continuous-carousel">
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>BOOTSTRAP</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>GIT</h5>
                </div>

                <div className="item">
                  <img src={appscript} alt="Image" />
                  <h5>APP SCRIPT</h5>
                </div>
                <div className="item">
                  <img src={appsheet} alt="Image" />
                  <h5>APPSHEET</h5>
                </div>
                <div className="item">
                  <img src={php} alt="Image" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
