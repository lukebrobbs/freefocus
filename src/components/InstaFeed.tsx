import React from "react"
import { Helmet } from "react-helmet"

export const InstaFeed = () => {
  return (
    <div>
      <Helmet>
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
      </Helmet>
      <iframe
        src="https://snapwidget.com/embed/954657"
        className="snapwidget-widget h-half-screen overflow-auto"
        allowTransparency
        frameBorder="0"
        scrolling="no"
        style={{ border: "none", overflow: "hidden", width: "100%" }}
      ></iframe>
    </div>
  )
}
