import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../cara/components/layout"
import Hero from "../cara/components/hero/hero"
import Projects from "../cara/components/projects"
import About from "../cara/components/about"
import Contact from "../cara/components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={6}>
      <Hero offset={0} />
      <Projects offset={1} />
      <About offset={3} />
      <Contact offset={5} />
    </Parallax>
  </Layout>
)

export default Cara
