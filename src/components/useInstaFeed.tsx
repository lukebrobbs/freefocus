import React, { useEffect } from "react"

export const useInstaFeed = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const script = document.createElement("script")
      const currentEl = document.getElementById("pixlee_lightbox_iframe")
      if (currentEl) window.PixleeAsyncInit()
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
}
