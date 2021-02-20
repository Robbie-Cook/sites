import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import Layout from "../cara/components/layout";
import Hero from "../cara/components/hero/hero";
import Projects from "../cara/components/projects";
import About from "../cara/components/about";
import Contact from "../cara/components/contact";
import { NextSeo } from "next-seo";

const Cara = () => (
  <Layout>
    <NextSeo
      title="Robbie Cook - Developer"
      description="Personal website of Robbie Cook, a typescript &amp; React web developer in New Zealand"
    />
    <Parallax pages={6}>
      <Hero offset={0} />
      <Projects offset={1} />
      <About offset={3} />
      <Contact offset={5} />
    </Parallax>
  </Layout>
);

export default Cara;
