import React, { useEffect, useState } from "react"

export const InstaFeed = () => {
  useEffect(() => {
    if (window !== undefined) {
      const script = document.createElement("script")
      script.src =
        "http://instafeed.assets.pixlee.com/assets/pixlee_widget_1_0_0.js"
      script.async = true
      window.PixleeAsyncInit = function() {
        Pixlee.init({ apiKey: process.env.GATSBY_PIXEL_API_KEY })
        Pixlee.addSimpleWidget({ widgetId: "22118" })
      }
      document.body.appendChild(script)
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [])
  return (
    <div>
      <div id="pixlee_container" className="instafeed__wrapper" />
    </div>
  )
}
