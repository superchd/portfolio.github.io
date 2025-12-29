import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Fade from "../components/animations/Fade";
import "../css/resume.scss";
import { useLanguage } from "../contexts/LanguageContext";
import data, { getText } from "../data";

const ResumeContent = () => {
  const { language } = useLanguage();

  // ✅ 너 구글드라이브 /preview 링크로 교체
  const resumeUrls = {
    en: "https://drive.google.com/file/d/1ivoTh4HsW1LXsZTr6SRJdOjK6u_Jj7Rf/view?usp=drive_link",
    ko: "https://drive.google.com/file/d/1ivoTh4HsW1LXsZTr6SRJdOjK6u_Jj7Rf/view?usp=drive_link",
  };

  const resumeUrl = resumeUrls[language] || resumeUrls.en;
  const resumeTitle = getText(data.nav.resume, language);

  return (
    <div className="section" id="resume">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{resumeTitle}</h1>
        </Fade>
        <Fade bottom duration={1000} distance="20px">
          <iframe src={resumeUrl} allow="autoplay" className="Resume" title={resumeTitle}>
            {resumeTitle}
          </iframe>
        </Fade>
      </div>
    </div>
  );
};

export default function Resume() {
  return (
    <div>
      <Layout>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Resume" />
        <ResumeContent />
      </Layout>
    </div>
  );
}
