const React = require("react")
const Modal = require("react-modal")
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({ element, props }) => {
  Modal.setAppElement("#___gatsby")
  return <Layout {...props}>{element}</Layout>
}
