import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1 className={aboutStyles.header}> Hello it's me</h1>
      <p>
        {" "}
        I love to create products that are easy to use, delightful to interact with, beautiful from a designer
        perspective and performant from a development perspective. Everything I do is approached with endless
        curiousity and openess knowing there can be many right answers and no question is every silly. Always
        eager to learn, my thirst for knowledge is as strong as my adoration for puppies.
      </p>

      <p>
        As a creative, I have a keen interest in music, street art, interior design and algorithmic art. I
        have a BA in Fashion Merchandising, and creating aesthetically pleasing experiences has always been an
        interest of mine. My aspiration has always been to combine my soft and core skills to produce
        memorable outcomes.
      </p>

      <p>
        Things I care about
        <ul>
          <li> UX & UI </li>
          <li> Headless CMS</li>
          <li> DRY patterns </li>
          <li> ES6 </li>
          <li> Modular Architectures </li>
          <li> Accesibility </li>
          <li> Responsive Web Design</li>
          <li> Data Visualizations </li>
          <li> JS animation libraries</li>
          <li> Security </li>
        </ul>
      </p>
    </Layout>
  )
}

export default AboutPage
