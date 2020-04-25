const path = require('path')

exports.createPages = async function ({ actions, graphql }) {

    const {createPage} = actions

    const { data } = await graphql(`
    query {
        allItems: allContentfulFreeSimples {
          totalCount
          edges {
            node {
              slug,
              type
            }
          }
        }
      }
    `)

    data.allItems.edges.forEach(edge => {
      const slug = edge.node.slug
      const type = edge.node.type
      createPage({
        path: type === 'free' ? `/free-stuff/${slug}` : `/win-stuff/${slug}`,
        // path:`free-stuff/${slug}`,
        component: path.resolve(`./src/templates/item-template.js`),
        context: { slug: slug },
      })
    })

    // all item with pagination

    const items = data.allItems.edges
    const itemPerPage = 3
    const numPages = Math.ceil(items.length/itemPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/all` : `/all/${i + 1}`,
        component: path.resolve("./src/templates/all-items-template.js"),
        context: {
          limit: itemPerPage,
          skip: i * itemPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
   
  }