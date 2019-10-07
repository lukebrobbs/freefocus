import React from "react"

export const InstaFeed = () => {
  return (
    <>
      <div
        className="embedsocial-instagram"
        data-ref="5e9319b2258d99f7c78e2483e681fcc17fec59ae"
      />
      <script>
        {(function(d, s, id) {
          var js
          if (d.getElementById(id)) {
            return null
          }
          js = d.createElement(s)
          js.id = id
          js.src = "https://embedsocial.com/embedscript/in.js"
          d.getElementsByTagName("head")[0].appendChild(js)
        })(document || undefined, "script", "EmbedSocialInstagramScript")}
      </script>
    </>
  )
}
