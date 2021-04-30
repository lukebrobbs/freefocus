import React, { Fragment, FunctionComponent, useEffect, useState } from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import Instagram from "../images/instagram.svg"
import Youtube from "../images/youtube.svg"
import Twitter from "../images/twitter.svg"
import Facebook from "../images/facebook.svg"
import TikTok from "../images/tikTok.svg"
import Contact from "../images/contact.png"
import Blog from "../images/blog.svg"
import { Social } from "./Social"
import { ITalentModalProps, ISocialData } from "../types"
import { Transition, Dialog } from "@headlessui/react"

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

  const handleClick = () => {
    history.replaceState(null, "", "/")
    setIsOpen(false)
  }

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          static
          onClose={() => {
            setIsOpen(false)
          }}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-70" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="p-4 pb-8 lg:pb-4 relative text-sm font-semibold flex flex-col lg:flex-row shadow-3xl bg-white bg-opacity-50 max-w-5xl rounded mx-2 md:mx-20 md:overflow-y-scroll lg:overflow-y-auto">
                <button
                  className="modal__close__button left-full -ml-8 top-3"
                  onClick={handleClick}
                />
                <GatsbyImage
                  image={node.image.gatsbyImageData}
                  alt={node.name}
                  className="w-48 h-48 mx-auto lg:w-96 lg:h-96 flex-shrink lg:mr-6"
                />
                <div className="flex flex-col flex-1">
                  <h1 className="uppercase text-freefocus-blue font-medium mt-2 mb-4 lg:my-6 lg:mt-0 text-3xl lg:text-4xl text-center lg:text-left">
                    {node.name}
                  </h1>
                  <div className="leading-snug text-sm lg:w-3/4 tracking-normal">
                    {renderRichText(node.description)}
                  </div>
                  <a
                    className="cursor-pointer py-4 inline-flex items-center"
                    href={`mailto: ${node.contactEmail}?subject=${node.name}`}
                    target="_blank"
                  >
                    <img
                      src={Contact}
                      alt="contact us"
                      className="m-0 w-7 h-7"
                    />
                    <p className="ml-2">CONTACT</p>
                  </a>
                  <div className="flex mt-auto justify-between w-min mx-auto lg:mx-0">
                    {node.instagramFollowerCount && (
                      <Social
                        image={Instagram}
                        alt="Instagram logo"
                        followers={
                          node.instagramFollowerCount
                            ? node.instagramFollowerCount
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
                    {node.tikTokFollowerCount && (
                      <Social
                        image={TikTok}
                        alt="TikTok logo"
                        followers={node.tikTokFollowerCount}
                        loading={loading}
                        to={`https://www.tiktok.com/@${node.tikTokUsername}`}
                      />
                    )}
                    {node.blogPostLink && (
                      <Social
                        image={Blog}
                        alt="Blog post"
                        followers="blog"
                        loading={loading}
                        to={node.blogPostLink}
                      />
                    )}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
