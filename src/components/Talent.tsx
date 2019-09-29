import React, { FunctionComponent, useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { IAllContentfulTalent } from "../types"
import Img from "gatsby-image"
import Modal from "react-modal"
import close from "../images/cancel.svg"
import Instagram from "../images/instagram.svg"
import Youtube from "../images/youtube.svg"
import Twitter from "../images/twitter.svg"
import Facebook from "../images/facebook.svg"
import { Social } from "./Social"

export const Talent: FunctionComponent<IAllContentfulTalent> = ({ node }) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="talent__wrapper">
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
        closeTimeoutMS={200}
        className="talent__modal"
        overlayClassName="talent__overlay__modal"
      >
        <div className="talent__modal__content">
          <button
            className="modal__close__button"
            onClick={() => setModalOpen(false)}
          >
            <img src={close} alt="close popup" className="modal__close__icon" />
          </button>
          <Img
            fluid={node.image.fluid}
            alt={node.name}
            className="talent__modal__image"
          />
          <div className="talent__description__wrapper">
            <h1 className="talent__name__header">{node.name}</h1>
            <p className="talent__description">
              {documentToReactComponents(node.description.json)}
            </p>
            <a className="talent__contact">CONTACT</a>
          </div>
          <div className="social__wrapper">
            <Social image={Instagram} alt="Instagram logo" followers="100k" />
            <Social image={Youtube} alt="Youtube logo" followers="120k" />
            <Social image={Twitter} alt="Twitter logo" followers="10k" />
            <Social image={Facebook} alt="Facebook logo" followers="150k" />
          </div>
        </div>
      </Modal>
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
