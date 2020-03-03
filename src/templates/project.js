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
      projectSiteUrl
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
  const {
    projectTitle,
    projectSiteUrl,
    projectHeroImage,
    projectDescription,
    collaborationCredit,
    pageOverviewPic,
    projectDetailsPic,
  } = props.data.contentfulProject
  console.log(projectDetailsPic)
  return (
    <Layout>
      <Head title={projectTitle} />
      <section>
        <div className={`row ${projectStyle.row}`}>
          <div className={projectStyle.imageArea}>
            <img src={projectHeroImage.file.url} alt={projectHeroImage.title} />
          </div>

          <div className={projectStyle.textArea}>
            <h1> {projectTitle} </h1>
            <div className={projectStyle.cardText}>
              <p>{projectDescription.childMarkdownRemark.excerpt}</p>
              <p> {collaborationCredit}</p>
              {projectSiteUrl && (
                <a href={projectSiteUrl} target="_blank" rel="noopener">
                  {" "}
                  view website{" "}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {pageOverviewPic && (
        <section>
          <div className={projectStyle.fullWidthImg}>
            <img src={pageOverviewPic.file.url} alt={pageOverviewPic.title} />
          </div>
        </section>
      )}
      {projectDetailsPic &&
        projectDetailsPic.map(pic => {
          return (
            <section className={projectStyle.picOverview}>
              <img src={pic.file.url} alt={pic.file.title} />
            </section>
          )
        })}
    </Layout>
  )
}

export default Project
