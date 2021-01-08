import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

function func(node) {
  if (node.has_image) {
    return <img src={node.image.src} class="card-img-top" alt="..." />
  } else {
    return ""
  }
}
export default ({ data }) => {
  //   console.log(data)
  return (
    <Layout>
      <div>
        <h1>My readings</h1>
        <container>
          {data.allPocketArticle.edges.map(({ node }, index) => (
            <div class="card mb-3" key={index}>
              <div class="card-body">
                <h3 class="card-title">
                  <Link to={node.url} color="teal">
                    {node.title}
                  </Link>
                </h3>
                {func(node)}
                <p class="card-text">{node.excerpt}</p>
                <p class="card-text">
                  <small class="text-muted">
                    Total {node.word_count} words from{" "}
                    <u>{node.articleDomain}</u>
                  </small>
                </p>
              </div>
            </div>
          ))}
        </container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery {
    allPocketArticle(sort: { fields: readDay }) {
      edges {
        node {
          id
          url
          title
          favourite
          excerpt
          is_article
          is_index
          has_video
          has_image
          word_count
          time_read
          readDay
          readWeek
          articleDomain
          domainFavicon
          image {
            item_id
            src
            width
            height
          }
        }
      }
    }
  }
`
