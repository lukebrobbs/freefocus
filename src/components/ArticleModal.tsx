import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"

import React, { Fragment } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import cn from "classnames"
import Contact from "../images/contact.png"
import Spotify from "../images/spotify.svg"
import Shop from "../images/shopping-bag.svg"

import { Dialog, Transition } from "@headlessui/react"
import { ContentfulLinkText } from "../types"

interface ArticleModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  body: RenderRichTextData<ContentfulRichTextGatsbyReference>
  image: any
  spotifyLink: ContentfulLinkText
  shopLink: ContentfulLinkText
  otherLink: ContentfulLinkText
  contactEmail: string
}
export const ArticleModal = ({
  isOpen,
  setIsOpen,
  body,
  title,
  image,
  spotifyLink,
  shopLink,
  contactEmail,
  otherLink,
}: ArticleModalProps) => {
  return (
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
            <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-60" />
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
            <div className="p-4 lg:pb-4 relative text-sm font-semibold shadow-3xl bg-white bg-opacity-80 max-w-3xl rounded mx-2 md:mx-20 md:overflow-y-scroll lg:overflow-y-auto">
              <button
                className="modal__close__button left-full -ml-8 top-3"
                onClick={() => setIsOpen(false)}
              />
              <Dialog.Title className="uppercase text-freefocus-blue text-center lg:text-left font-semibold mb-4 px-4 lg:pl-0 text-2xl lg:text-3xl">
                {title}
              </Dialog.Title>
              <div className="flex flex-col lg:flex-row relative lg:h-96">
                <div className="w-48 h-48 mx-auto lg:w-96 lg:h-96 lg:mr-6">
                  <GatsbyImage image={image.gatsbyImageData} alt={title} />
                </div>
                <div className=" flex flex-col flex-1 h-full lg:px-0 mt-6 lg:mt-0 lg:pr-2">
                  <div className="tracking-normal flex-1 font-semibold text-sm h-full overflow-auto">
                    {renderRichText(body)}
                  </div>
                  <div
                    className={cn(
                      "flex md:flex-row md:items-center w-full pt-6 space-y-2 md:space-y-0",
                      {
                        "justify-end": !spotifyLink && !shopLink && !otherLink,
                        "justify-between":
                          !!spotifyLink || !!shopLink || !!otherLink,
                        "flex-col":
                          [spotifyLink, shopLink, otherLink].filter(Boolean)
                            .length > 1,
                      }
                    )}
                  >
                    {spotifyLink && (
                      <div className="inline-flex items-center">
                        <img
                          src={Spotify}
                          alt="Spotify logo"
                          className="w-8 h-8 m-0"
                        />
                        <a
                          href={spotifyLink.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="uppercase"
                        >
                          {spotifyLink.linkText}
                        </a>
                      </div>
                    )}
                    {otherLink && (
                      <div className="inline-flex items-center ml-8 md:ml-0">
                        <a
                          href={otherLink.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="uppercase"
                        >
                          {otherLink.linkText}
                        </a>
                      </div>
                    )}
                    {shopLink && (
                      <div className="inline-flex items-center">
                        <img
                          src={Shop}
                          aria-hidden
                          className="w-6 h-6 m-0 mr-2"
                        />
                        <a
                          href={shopLink.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="uppercase"
                        >
                          {shopLink.linkText}
                        </a>
                      </div>
                    )}

                    <a
                      className="cursor-pointer inline-flex items-center"
                      href={`mailto: ${contactEmail}`}
                      target="_blank"
                    >
                      <img
                        src={Contact}
                        alt="contact us"
                        className="m-0 w-7 h-7"
                      />
                      <p className="ml-2">CONTACT</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
