import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Blog from '../components/blog'

const BlogTemplate = () => (
  <Layout>
    <Parallax pages={6}>
      <Blog offset={0} />
    </Parallax>
  </Layout>
)

export default BlogTemplate
