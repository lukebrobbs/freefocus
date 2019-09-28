/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"

import Header from "./header"
import "./layout.css"
import { ILayoutProps } from "../types"

const Layout: FunctionComponent<ILayoutProps> = ({ children, path }) => {
  return (
    <>
      <Header path={path} />
      <div
        style={{
          margin: `0 auto`,
          // padding: `0px 4rem `,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className="footer__wrapper">
          <div className="footer__line" />
          <p className="footer__address">
            Free Focus, 4th Floor, 100 Grays Inn Road, London, WC1X 8AL |{" "}
            <a
              className="footer__email"
              href="mailto: info@freefocus.co.uk"
              target="_blank"
            >
              info@freefocus.co.uk
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
