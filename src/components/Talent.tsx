import React, { FunctionComponent, useState } from "react"
import { IAllContentfulTalent } from "../types"
import Img from "gatsby-image"
import { TalentModal } from "./TalentModal"

export const Talent: FunctionComponent<IAllContentfulTalent> = ({ node }) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="talent__wrapper">
      <TalentModal node={node} isOpen={modalOpen} setIsOpen={setModalOpen} />
      <div className="modal__opener" onClick={() => setModalOpen(true)}>
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
