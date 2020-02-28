import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

export const query = graphql`
  query($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      projectTitle
      collaborationCredit
      projectHeroImage {
        title
        file {
          url
        }
      }
      projectDescription {
        childMarkdownRemark {
          excerpt
        }
      }
    }
  }
`

const Project = props => {
  return (
    <Layout fullWidth={true}>
      <div className="heroContainer"></div>
      <Head title="to fill with project title here" />

      <section>
        <h1> {props.data.contentfulProject.projectTitle} </h1>
        <p>{props.data.contentfulProject.projectDescription.childMarkdownRemark.excerpt}</p>
        <p> {props.data.contentfulProject.collaborationCredit}</p>
        <img src={props.data.contentfulProject.projectHeroImage.file.url} alt={props.data.contentfulProject.projectHeroImage.title} />
      </section>
    </Layout>
  )
}

export default Project
