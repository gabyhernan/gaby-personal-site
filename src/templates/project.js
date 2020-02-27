import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

const Project = () => {
  return (
    <Layout>
      <Head title="to fill with project title here" />
      <h1> This will be my project Template </h1>
    </Layout>
  )
}

export default Project
