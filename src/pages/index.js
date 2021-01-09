import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  let handleImgError = e => {
    e.target.style.display = "none"
  }
  return (
    <Layout>
      <div>
        <h1>My readings</h1>
        <div className="container">
          {data.allPocketArticle.edges.map(({ node }, index) => (
            <div key={index}>
              {node.url && node.title && (
                <div className="card mb-3">
                  <div className="card-body">
                    <h3 className="card-title">
                      <a href={node.url} color="teal">
                        {node.title}
                      </a>
                    </h3>
                    {node.has_image && (
                      <img
                        src={node.image.src}
                        onError={handleImgError}
                        alt={node.title}
                      />
                    )}
                    <p className="card-text">{node.excerpt}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Total {node.word_count} words from{" "}
                        <u>{node.articleDomain}</u>
                      </small>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
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
