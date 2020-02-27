import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Head from "../components/head"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1 className={indexStyles.header}>
        Hi. I'm Gaby, a Front End Engineer based in NYC.{" "}
      </h1>
      <h2 className={indexStyles.subHeader}> I have a dog named Oprah</h2>
    </Layout>
  )
  return (
    <div>
      <Header />
      <h1> Hi. </h1>
      <h2>
        {" "}
        Im Gaby, a Front End Engineer based in quiet and very clean NYC.{" "}
      </h2>
      <p>
        {" "}
        Need a developer?
        <Link to="/contact">contact me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
