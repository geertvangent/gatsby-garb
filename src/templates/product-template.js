import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ProductTemplate = ({
  data: { contentfulProduct },
  pageContext,
  location,
}) => (
  <Layout>
    <div style={{ textAlign: "center" }}>
      {/**Product Info */}
      <h2>
        {contentfulProduct.name}{" "}
        <span style={{ color: "#ccc" }}>
          Added on {contentfulProduct.createdAt}
        </span>
      </h2>
      <h4>€{contentfulProduct.price}</h4>
      <p>{contentfulProduct.description}</p>
      <button
        style={{
          background: "darkorange",
          color: "whitz",
          padding: "0.3em",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "0.5em",
        }}
        className="snipcart-add-item"
        data-item-id={contentfulProduct.slug}
        data-item-price={contentfulProduct.price}
        data-item-image={contentfulProduct.image.file.url}
        data-item-name={contentfulProduct.name}
        data-item-url={location.pathname}
      >
        Add to Cart
      </button>
      <Img fluid={contentfulProduct.image.fluid} />
    </div>
  </Layout>
)

export const query = graphql`
  query getProduct($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      slug
      name
      price
      description
      createdAt(formatString: "MMMM Do,YYYY")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`

export default ProductTemplate
