/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { graphql, Link, useStaticQuery } from "gatsby"
import { IMainLogoQuery } from "../types"
import Img from "gatsby-image"

export const MAIN_LOGO_QUERY = graphql`
  query mainLogoQuery {
    contentfulAsset(title: { eq: "Header-Logo" }) {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`

export default function Nav() {
  const data = useStaticQuery<IMainLogoQuery>(MAIN_LOGO_QUERY)

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 bg-gray-50 sm:bg-white">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <Img
                      fluid={data.contentfulAsset.fluid}
                      alt="Free focus Logo"
                      className="block w-52"
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block lg:ml-6">
                <div className="flex space-x-4">
                  <Link
                    className="nav__listItem inline-flex flex-col justify-between items-center transition-color uppercase px-3 py-2 text-sm font-medium hover:text-freefocus-blue hover:font-bold"
                    to="/"
                    data-text="Talent"
                    activeClassName="font-bold text-freefocus-blue"
                  >
                    Talent
                  </Link>
                  <Link
                    className="nav__listItem inline-flex flex-col justify-between items-center transition-color uppercase px-3 py-2 text-sm font-medium hover:text-freefocus-blue hover:font-bold"
                    to="/highlights"
                    data-text="Highlights"
                    activeClassName="font-bold text-freefocus-blue"
                  >
                    Highlights
                  </Link>
                  <Link
                    className="nav__listItem inline-flex flex-col justify-between items-center transition-color uppercase px-3 py-2 text-sm font-medium hover:text-freefocus-blue hover:font-bold"
                    to="/about"
                    data-text="About"
                    activeClassName="font-bold text-freefocus-blue"
                  >
                    About
                  </Link>
                  <Link
                    className="nav__listItem inline-flex flex-col justify-between items-center transition-color uppercase px-3 py-2 text-sm font-medium hover:text-freefocus-blue hover:font-bold"
                    to="/contact"
                    data-text="Contact"
                    activeClassName="font-bold text-freefocus-blue"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            show={open}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static className="lg:hidden bg-gray-50">
              <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                <Disclosure.Button className="uppercase px-3 text-sm font-medium text-left hover:bg-gray-100">
                  <Link
                    to="/"
                    activeClassName="text-freefocus-blue font-bold"
                    className="inline-block w-full py-2"
                  >
                    Talent
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button className="uppercase px-3 text-sm font-medium text-left hover:bg-gray-100">
                  <Link
                    to="/highlights"
                    activeClassName="text-freefocus-blue font-bold"
                    className="inline-block w-full py-2"
                  >
                    Highlights
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button className="uppercase px-3 text-sm font-medium text-left hover:bg-gray-100">
                  <Link
                    to="/about"
                    activeClassName="text-freefocus-blue font-bold"
                    className="inline-block w-full py-2"
                  >
                    About
                  </Link>
                </Disclosure.Button>
                <Disclosure.Button className="uppercase px-3 text-sm font-medium text-left hover:bg-gray-100">
                  <Link
                    to="/contact"
                    activeClassName="text-freefocus-blue font-bold"
                    className="inline-block w-full py-2"
                  >
                    Contact
                  </Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
