import React, { FunctionComponent, useState } from "react"
import { IAllContentfulTalent } from "../types"
import Img from "gatsby-image"
import { TalentModal } from "./TalentModal"
import { navigate } from "gatsby"

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
      className="talent__wrapper"
      id={node.name
        .toLowerCase()
        .replace(" ", "+")
        .trim()}
    >
      <TalentModal node={node} isOpen={isOpen} setIsOpen={setIsopen} />
      <div
        className="modal__opener"
        onClick={() => {
          history.pushState(
            null,
            "",
            `?talent=${node.name
              .toLowerCase()
              .replace(" ", "+")
              .trim()}`
          )
          setIsopen(true)
        }}
        onKeyPress={handleKeyPress}
        role="button"
        aria-haspopup
        tabIndex={0}
      >
        <Img
          fluid={node.image.fluid}
          alt={node.name}
          className="talent__image"
        />
        <div className="talent__name__wrapper">
          <p className="talent__name">{node.name}</p>
        </div>
      </div>
    </div>
  )
}
