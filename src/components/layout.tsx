/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { ISiteMetaQuery, ILayoutProps } from "../types"

const Layout: FunctionComponent<ILayoutProps> = ({ children, path }) => {
  return (
    <>
      <Header path={path} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 4rem `,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer />
      </div>
    </>
  )
}

export default Layout
