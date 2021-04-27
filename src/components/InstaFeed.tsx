import React from "react"
import { useInstaFeed } from "./useInstaFeed"

export const InstaFeed = () => {
  useInstaFeed()
  return (
    <div>
      <div id="pixlee_container" className="h-half-screen overflow-auto" />
    </div>
  )
}
