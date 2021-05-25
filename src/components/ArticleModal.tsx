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
            <div className="relative shadow-3xl bg-white bg-opacity-90 rounded py-4 w-11/12 md:w-3/4 2xl:w-1/3 mx-auto lg:h-modal ">
              <button
                className="modal__close__button left-full -ml-8 -mb-20"
                onClick={() => setIsOpen(false)}
              />
              <Dialog.Title className="uppercase text-lg font-semibold mb-4 text-center px-6 lg:px-0">
                {title}
              </Dialog.Title>
              <div className="lg:grid grid-cols-4 gap-4 relative h-full pb-20">
                <div className="col-span-2 lg:sticky top-0 left-0 w-full px-6 pt-2 lg:pt-0">
                  <GatsbyImage image={image.gatsbyImageData} alt={title} />
                </div>
                <div className="tracking-normal text-lg col-span-2 h-full overflow-auto px-6 lg:px-0 mt-6 lg:mt-0 lg:pr-6">
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
