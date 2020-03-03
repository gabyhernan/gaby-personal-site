import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"
import projectStyle from "../templates/project.module.scss"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: displayOrder, order: ASC }) {
        edges {
          node {
            slug
            projectTitle
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
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Projects" />
      {data.allContentfulProject.edges.map(edge => {
        return (
          <div className={`row ${projectStyle.row}`}>
            <div className={projectStyle.imageArea}>
              <Link className={projectStyle.projectHyperlink} to={`/projects/${edge.node.slug}`}>
                <img src={edge.node.projectHeroImage.file.url} alt={edge.node.projectHeroImage.title} />
              </Link>
            </div>

            <div className={projectStyle.textArea}>
              <h1> {edge.node.projectTitle} </h1>
              <div className={projectStyle.cardText}>
                <p>{edge.node.projectDescription.childMarkdownRemark.excerpt}</p>
                <Link className={projectStyle.linkButton} to={`/projects/${edge.node.slug}`}>
                  {" "}
                  view work
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export default ProjectsPage
