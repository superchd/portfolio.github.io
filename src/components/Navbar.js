import React from "react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";

const Navbar = () => {
  const { language, getLanguageUrl } = useLanguage();
  const resumeLink = getLanguageUrl(language, "/resume");

  const homeUrl = getLanguageUrl(language, "/");
  const notesUrl = "https://superchd.github.io/hyundae_cha.github.io/";

  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="left-nav">
            <button onClick={() => (window.location.href = resumeLink)} type="button" className="btn">
              {getText(data.nav.resume, language)}
            </button>
          </div>

          <div className="center-nav">
            <div className="links-wrapper">
              <button onClick={() => (window.location.href = homeUrl + "#home")} type="button">
                {getText(data.nav.home, language)}
              </button>
              <button onClick={() => (window.location.href = homeUrl + "#about")} type="button">
                {getText(data.nav.about, language)}
              </button>
              <button onClick={() => (window.location.href = homeUrl + "#work")} type="button">
                {getText(data.nav.work, language)}
              </button>
              <button onClick={() => (window.location.href = homeUrl + "#projects")} type="button">
                {getText(data.nav.projects, language)}
              </button>
              <button onClick={() => window.open(notesUrl, "_blank")} type="button">
                {getText(data.nav.notes, language)}
              </button>
              <button onClick={() => (window.location.href = homeUrl + "#contact")} type="button">
                {getText(data.nav.contact, language)}
              </button>

              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
