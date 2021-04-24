/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"

import Nav from "./Nav"
import "../styles/layout.css"
import { ILayoutProps } from "../types"

const Layout: FunctionComponent<ILayoutProps> = ({ children, path }) => {
  return (
    <>
      {/* <Header path={path} /> */}
      <Nav />
      <main className="max-w-6xl lg:px-8 mx-auto pt-6">{children}</main>
      <footer className="footer__wrapper">
        <div className="footer__line" />
        <p className="footer__address">
          Free Focus, First Floor, 17-19 Foley Street, Fitzrovia, London, W1W
          6DW{" "}
          <a
            className="footer__email"
            href="mailto: info@freefocus.co.uk"
            target="_blank"
          >
            info@freefocus.co.uk
          </a>
        </p>
      </footer>
    </>
  )
}

export default Layout
