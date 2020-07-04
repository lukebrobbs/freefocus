const React = require("react")
const Modal = require("react-modal")
const { default: UserProvider } = require("./src/providers/UserProvider")
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({ element, props }) => {
  Modal.setAppElement("#___gatsby")
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
  return <UserProvider>{element}</UserProvider>
}
