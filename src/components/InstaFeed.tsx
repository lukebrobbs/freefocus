import React, { useEffect } from "react"

export const InstaFeed = () => {
  useEffect(() => {
    console.log("here1")
    if (typeof window !== `undefined`) {
      console.log("here2")
      const script = document.createElement("script")
      script.src =
        "https://instafeed.assets.pixlee.com/assets/pixlee_widget_1_0_0.js"
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
