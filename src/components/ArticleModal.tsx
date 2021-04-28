import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"

import React, { Fragment } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

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
            <div className="relative shadow-3xl bg-white bg-opacity-90 rounded py-4 w-11/12 md:w-3/4 2xl:w-1/2 mx-auto">
              <button
                className="modal__close__button left-full -ml-8"
                onClick={() => setIsOpen(false)}
              />
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full px-6 pt-10 lg:pt-0 flex items-center justify-center">
                  <GatsbyImage image={image.gatsbyImageData} alt={title} />
                </div>
                <div className="px-6 lg:pr-10 pb-10 pt-6 lg:pt-4 w-full">
                  <Dialog.Title className="text-2xl font-bold mb-4">
                    {title}
                  </Dialog.Title>
                  {renderRichText(body)}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
