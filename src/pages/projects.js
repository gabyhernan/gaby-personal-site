import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            projectTitle
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Projects" />
      <h1> Projects</h1>
      <div className="projectCard">
        {data.allContentfulProject.edges.map(edge => {
          console.log(edge)
          return (
            <Link to={`/projects/${edge.node.slug}`}>
              <div className="imageHere"> </div>
              <h2> {edge.node.projectTitle} </h2>
            </Link>
          )
        })}

        <p> all of the projects should show up here </p>
      </div>
    </Layout>
  )
}

export default ProjectsPage
