import React from "react"
import Modal from "react-modal"
import Layout from "./src/components/layout"
import "./src/styles/global.css"

export const wrapPageElement = ({ element, props }) => {
  Modal.setAppElement("#___gatsby")
  return <Layout {...props}>{element}</Layout>
}
