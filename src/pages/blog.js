import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1> Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(post => {
          const slug = post.node.fields.slug
          return (
            <Link to={`/blog/${post.node.fields.slug}`}>
              <li key={post.id}>
                <h2> {post.node.frontmatter.title}</h2>
                <p> {post.node.frontmatter.date} </p>
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
