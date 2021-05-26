import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"

import React, { Fragment } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Contact from "../images/contact.png"

import { Dialog, Transition } from "@headlessui/react"

interface ArticleModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  body: RenderRichTextData<ContentfulRichTextGatsbyReference>
  image: any
}
export const ArticleModal = ({
  isOpen,
  setIsOpen,
  body,
  title,
  image,
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
            <div className="p-4 lg:pb-4 relative text-sm font-semibold shadow-3xl bg-white bg-opacity-80 max-w-5xl rounded mx-2 md:mx-20 md:overflow-y-scroll lg:overflow-y-auto">
              <button
                className="modal__close__button left-full -ml-8 top-3"
                onClick={() => setIsOpen(false)}
              />
              <Dialog.Title className="uppercase text-freefocus-blue font-semibold mb-4 text-center pl-4 pr-8 text-2xl lg:text-3xl">
                {title}
              </Dialog.Title>
              <div className="flex flex-col lg:flex-row relative lg:h-96">
                <div className="col-span-2 w-48 h-48 mx-auto lg:w-96 lg:h-96 lg:mr-6">
                  <GatsbyImage image={image.gatsbyImageData} alt={title} />
                </div>
                <div className="tracking-normal flex-1 font-semibold text-sm col-span-2 h-full overflow-auto px-6 lg:px-0 mt-6 lg:mt-0 lg:pr-6">
                  {renderRichText(body)}
                  <div className="col-start-4 lg:pr-6">
                    <a
                      className="cursor-pointer pt-4 inline-flex items-center"
                      href={`mailto: test@test.com?subject=subject`}
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
