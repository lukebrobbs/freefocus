import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { FunctionComponent } from "react"
import { useStaticQuery } from "gatsby"
import { IMainLogoQuery } from "../types"

const MAIN_LOGO_QUERY = graphql`
  query mainLogoQuery {
    contentfulAsset(title: { eq: "Header-Logo" }) {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`

const Header: FunctionComponent<{ path: string }> = ({ path }) => {
  const data = useStaticQuery<IMainLogoQuery>(MAIN_LOGO_QUERY)

  const isActive = (linkRoute: string) => {
    return path === linkRoute ? "active" : ""
  }

  return (
    <header
      style={{
        marginBottom: `1rem`,
      }}
    >
      <div className="header__wrapper">
        <Img
          fluid={data.contentfulAsset.fluid}
          alt="Free focus Logo"
          className="header__logo"
        >
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          />
        </Img>
        <ul className="header__listItems">
          <li className="header__listItem">
            <Link className={`header__link ${isActive("/")}`} to="/">
              Talent
            </Link>
          </li>
          <li className="header__listItem">
            <Link className={`header__link ${isActive("/contact/")}`} to="/">
              Contact
            </Link>
          </li>
          <li className="header__listItem">
            <Link className={`header__link ${isActive("/about/")}`} to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
