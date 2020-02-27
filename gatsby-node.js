const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // 1. Get Path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const projectTemplate = path.resolve("./src/templates/project.js")
  // 2. Get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // 2. Get markdown data
  const projectRes = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        // obj that contains data that can be passed to template
        slug: edge.node.slug,
      },
    })
  })

  projectRes.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.slug}`,
      context: {
        // obj that contains data that can be passed to template
        slug: edge.node.slug,
      },
    })
  })
}

// // Grabs Project Template
// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   // 1. Get Path to template
// }
