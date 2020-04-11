import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import netlifyIdentity from "netlify-identity-widget"

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props} />

class Header extends React.Component {
  componentDidMount() {
    netlifyIdentity.init()
  }
  render() {
    const { siteTitle } = this.props
    return (
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <NavLink
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </NavLink>
          </h1>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/products">Store</NavLink>
          <div data-netlify-identity-menu />

          {/*       Shopping Cart Summary
           */}
          <div
            className="snipcart-summary snipcart-checkout"
            style={{ color: "white", cursor: "pointer" }}
          >
            <div>
              <strong>My Cart</strong>
            </div>
            <div>
              <span
                style={{ fontWeight: "bold" }}
                className="snipcart-total-items"
              ></span>{" "}
              Items in Cart
            </div>
            <div>
              Total Price{" "}
              <span
                style={{ fontWeight: "bold" }}
                className="snipcart-total-price"
              />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
