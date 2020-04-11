import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const postTemplate = ({ data: post }) => {
  //this data is coming from the query below which takes its param from the context defined in gatsby-node.js
  return (
    <Layout>
      <div>
        <h1>{post.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
      </div>{" "}
    </Layout>
  )
}

export const query = graphql`
  query onePost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default postTemplate
