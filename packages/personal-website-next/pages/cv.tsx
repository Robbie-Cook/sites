import React from "react";
import { Parallax } from "react-spring/renderprops-addons";
import Layout from "../components/layout";
import { NextSeo } from "next-seo";
import CV from '../components/cv';

const Cara = () => (
  <Layout>
    <NextSeo
      title="Robbie Cook - Developer - CV"
      description="See my resume &amp; CV here!"
    />
    <Parallax pages={1}>
			<CV offset={1.9} />
    </Parallax>
  </Layout>
);

export default Cara;
