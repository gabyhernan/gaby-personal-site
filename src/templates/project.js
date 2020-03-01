import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
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
          fileName
        }
      }
      projectDescription {
        childMarkdownRemark {
          excerpt
        }
      }
      pageOverviewPic {
        title
        file {
          url
        }
      }

      projectDetailsPic {
        title
        file {
          url
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
          <div className={projectStyle.imageArea}>
            <img src={props.data.contentfulProject.projectHeroImage.file.url} alt={props.data.contentfulProject.projectHeroImage.title} />
          </div>

          <div className={projectStyle.textArea}>
            <h1> {props.data.contentfulProject.projectTitle} </h1>
            <p>{props.data.contentfulProject.projectDescription.childMarkdownRemark.excerpt}</p>
            <p> {props.data.contentfulProject.collaborationCredit}</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <img src={props.data.contentfulProject.pageOverviewPic.file.url} alt={props.data.contentfulProject.pageOverviewPic.title} />
        </div>
      </section>
    </Layout>
  )
}

export default Project
