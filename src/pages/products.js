import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const products = ({ data: { allContentfulProduct } }) => (
  <Layout>
    <div>
      {/**Products list */}
      {allContentfulProduct.edges.map(({ node: product }) => (
        <div key={product.id}>
          {" "}
          <h2>Garb Products</h2>
          <Link
            to={`/products/${product.slug}`}
            style={{ textDecoration: "none" }}
          >
            <h3>
              {product.name} - {""} <span>{product.price}</span>
            </h3>
          </Link>
          <Img fluid={product.image.fluid} />
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query allProducts {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          image {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default products
