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

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="px-4 lg:px-8 mx-auto pt-6">{children}</main>
      <footer className="w-1/2 mx-auto text-center">
        <div className="footer__line" />
        <address className=" text-freefocus-blue uppercase tracking-widest text-2xs font-semibold mt-4 mx-auto mb-12">
          Free Focus, 12-18 Theobalds Road, London, WC1X 8SL&nbsp;
          <a
            className="text-freefocus-secondary cursor-pointer"
            href="mailto: info@freefocus.co.uk"
            target="_blank"
          >
            info@freefocus.co.uk
          </a>
        </address>
      </footer>
    </>
  )
}

export default Layout
