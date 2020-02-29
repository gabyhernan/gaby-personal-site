import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
import projectStyle from "./project.module.scss"

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
      <Head title={props.data.contentfulProject.projectTitle} />
      <section>
        <div className={`row ${projectStyle.row}`}>
          <div className="col-7">
            <h1> {props.data.contentfulProject.projectTitle} </h1>
            <img src={props.data.contentfulProject.projectHeroImage.file.url} alt={props.data.contentfulProject.projectHeroImage.title} />
            <p>{props.data.contentfulProject.projectDescription.childMarkdownRemark.excerpt}</p>
            <p> {props.data.contentfulProject.collaborationCredit}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Project
