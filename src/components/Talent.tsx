import React, { FunctionComponent, useState } from "react"
import { IAllContentfulTalent } from "../types"
import Img from "gatsby-image"
import Modal from "react-modal"

export const Talent: FunctionComponent<IAllContentfulTalent> = ({ node }) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="talent__wrapper" onClick={() => setModalOpen(true)}>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
        closeTimeoutMS={200}
        className="talent__modal"
        overlayClassName="talent__overlay__modal"
      >
        <div className="talent__modal__content">
          <Img
            fluid={node.image.fluid}
            alt={node.name}
            className="talent__modal__image"
          />
          <div className="talent__description__wrapper">
            <h1>{node.name}</h1>
            <p className="talent__description">
              {node.description.content[0].content[0].value}
            </p>
            <a>CONTACT</a>
            <p>Social media images here</p>
          </div>
        </div>
      </Modal>
      <Img fluid={node.image.fluid} alt={node.name} className="talent__image" />
      <div className="talent__name__wrapper">
        <p className="talent__name">{node.name}</p>
      </div>
    </div>
  )
}
