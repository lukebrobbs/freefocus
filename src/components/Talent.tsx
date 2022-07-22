import React, { FunctionComponent, useState } from "react"
import { IAllContentfulTalent } from "../types"
import { GatsbyImage } from "gatsby-plugin-image"
import { TalentModal } from "./TalentModal"

export const Talent: FunctionComponent<IAllContentfulTalent> = ({
  node,
  defaultOpen,
}) => {
  const [isOpen, setIsopen] = useState(defaultOpen)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setIsopen(true)
    }
  }
  return (
    <div
      className="transition-all duration-200 ease-in-out text-center transform relative hover:scale-102"
      id={node.name.toLowerCase().replace(" ", "+").trim()}
    >
      <TalentModal node={node} isOpen={isOpen} setIsOpen={setIsopen} />
      <div
        className="cursor-pointer"
        onClick={() => {
          history.pushState(
            null,
            "",
            `?talent=${node.name.toLowerCase().replace(" ", "+").trim()}`
          )
          setIsopen(true)
        }}
        onKeyPress={handleKeyPress}
        role="button"
        aria-haspopup
        tabIndex={0}
      >
        <GatsbyImage
          image={node.image.gatsbyImageData}
          alt={node.name}
          loading="eager"
        />

        <div className="absolute bottom-3 w-full bg-white bg-opacity-80">
          <p className="uppercase text-lg sm:text-sm font-semibold">
            {node.name}
          </p>
        </div>
      </div>
    </div>
  )
}
