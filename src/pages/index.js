import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import Header from "../components/Header";
import About from "../components/about";
import Education from "../components/Education";
import Work from "../components/Work";
import Project from "../components/projects";
import Skills from "../components/skills";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title="Hyundae Cha Portfolio" />
    <Header />
    <About />
    <Education />
    <Work />
    <Project />
    <Skills />
    <Footer />
  </Layout>
);

export default IndexPage;
