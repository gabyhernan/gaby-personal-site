import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <Layout>
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
