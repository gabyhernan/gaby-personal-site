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
  const { projectTitle, projectHeroImage, projectDescription, collaborationCredit, pageOverviewPic } = props.data.contentfulProject
  return (
    <Layout fullWidth={true}>
      <Head title={projectTitle} />
      <section>
        <div className={`row ${projectStyle.row}`}>
          <div className={projectStyle.imageArea}>
            <img src={projectHeroImage.file.url} alt={projectHeroImage.title} />
          </div>

          <div className={projectStyle.textArea}>
            <h1> {projectTitle} </h1>
            <p>{projectDescription.childMarkdownRemark.excerpt}</p>
            <p> {collaborationCredit}</p>
          </div>
        </div>
      </section>

      <section>
        <div className={projectStyle.fullWidthImg}>
          <img src={pageOverviewPic.file.url} alt={pageOverviewPic.title} />
        </div>
      </section>
    </Layout>
  )
}

export default Project
