import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import netlifyIdentity from "netlify-identity-widget"

class products extends React.Component {
  state = {
    products: [],
  }
  componentDidMount() {
    this.getProducts()
    netlifyIdentity.on("login", user => this.getProducts(user))
    netlifyIdentity.on("logout", () => this.getProducts())
  }

  getProducts = user => {
    console.log("Current user", user)
    const allProducts = this.props.data.allContentfulProduct.edges
    const products =
      netlifyIdentity.currentUser() !== null
        ? allProducts
        : allProducts.filter(({ node: product }) => !product.private)

    this.setState({
      products,
    })
  }

  render() {
    const { products } = this.state

    return (
      <Layout>
        <div>
          {/**Products list */}
          {products.map(({ node: product }) => (
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
  }
}

export const query = graphql`
  query allProducts {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          private
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
