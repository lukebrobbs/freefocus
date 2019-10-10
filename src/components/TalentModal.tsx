import React, { FunctionComponent, useEffect, useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Modal from "react-modal"
import Img from "gatsby-image"
import close from "../images/cancel.svg"
import Instagram from "../images/instagram.svg"
import Youtube from "../images/youtube.svg"
import Twitter from "../images/twitter.svg"
import Facebook from "../images/facebook.svg"
import Contact from "../images/contact.png"
import { Social } from "./Social"
import { ITalentModalProps, ISocialData } from "../types"

export const TalentModal: FunctionComponent<ITalentModalProps> = ({
  node,
  isOpen,
  setIsOpen,
}) => {
  const [socialData, setSocialData] = useState<ISocialData>({})
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen && !Object.keys(socialData).length) {
      setLoading(true)
      getSocial()
    }
  }, [isOpen])

  const getSocial = async () => {
    const postBody = {
      twitterUsername: node.twitterUsername,
      youTubeUsername: node.youtubeUsername,
      instagramUsername: node.instagramUsername,
    }
    const headers = new Headers({
      "content-Type": "application/json",
    })
    try {
      const response = await fetch(
        `${process.env.GATSBY_SOCIAL_API_URL}/allSocial/followers`,
        {
          method: "POST",
          body: JSON.stringify(postBody),
          headers,
        }
      )
      const data: ISocialData = await response.json()
      setSocialData(data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Talent Modal"
        closeTimeoutMS={200}
        className="talent__modal"
        overlayClassName="talent__overlay__modal"
      >
        <div className="talent__modal__content">
          <button
            className="modal__close__button"
            onClick={() => setIsOpen(false)}
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
            <div className="talent__description">
              {documentToReactComponents(node.description.json)}
            </div>
            <a
              className="talent__contact"
              href={`mailto: ${node.contactEmail}?subject=${node.name}`}
              target="_blank"
            >
              <img src={Contact} alt="contact us" />
              <p style={{ alignSelf: "center", marginLeft: "10px" }}>CONTACT</p>
            </a>
          </div>
          <div className="social__wrapper">
            {node.instagramUsername && (
              <Social
                image={Instagram}
                alt="Instagram logo"
                followers={
                  socialData.instagramFollowerCount
                    ? socialData.instagramFollowerCount
                    : ""
                }
                loading={loading}
                to={`https://www.instagram.com/${node.instagramUsername}`}
              />
            )}
            {node.youtubeUsername && (
              <Social
                image={Youtube}
                alt="Youtube logo"
                followers={
                  socialData.youTubeFollowerCount
                    ? socialData.youTubeFollowerCount
                    : ""
                }
                loading={loading}
                to={`https://www.youtube.com/channel/${node.youtubeUsername}`}
              />
            )}
            {node.twitterUsername && (
              <Social
                image={Twitter}
                alt="Twitter logo"
                followers={
                  socialData.twitterFollowerCount
                    ? socialData.twitterFollowerCount
                    : ""
                }
                loading={loading}
                to={`https://twitter.com/${node.twitterUsername}`}
              />
            )}
            {node.facebookUsername && (
              <Social
                image={Facebook}
                alt="Facebook logo"
                followers={node.facebookFollowerCount}
                loading={loading}
                to={`https://www.facebook.com/${node.facebookUsername}`}
              />
            )}
          </div>
        </div>
      </Modal>
    </>
  )
}
