import { FluidObject } from "gatsby-image"
import { Document } from "@contentful/rich-text-types"

export interface ISEOProps {
  description?: string
  lang?: string
  meta?: ConcatArray<
    | { name: string; content: string; property?: undefined }
    | { property: string; content: string; name?: undefined }
  >
  title?: string
}

export interface ISiteMetaQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

export interface IAllContentfulTalent {
  node: {
    description: {
      json: Document
    }
    contactEmail: string
    image: {
      fluid: FluidObject
    }
    name: string
    id: string
    twitterUsername: string
    instagramUsername: string
    facebookUsername: string
    youtubeUsername: string
    tier: number
  }
}

export interface ITalentModalProps extends IAllContentfulTalent {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IIndexPageProps {
  data: {
    allContentfulTalent: { edges: IAllContentfulTalent[] }
  }
  path: string
}

export interface IMainLogoQuery {
  contentfulAsset: {
    fluid: FluidObject
  }
}

export interface ILayoutProps {
  path: string
}

export interface ISocialProps {
  image: string
  followers: string | number
  alt: string
  loading: boolean
  to: string
}

type contactFormActionTypes =
  | "SET_NAME"
  | "SET_EMAIL"
  | "SET_SUBJECT"
  | "SET_MESSAGE"
  | "SET_LOADING"
  | "SET_SUCCESS"

export interface IContactFormState {
  name: string
  email: string
  subject: string
  message: string
  loading: boolean
  success: boolean
}

export interface IContactFormAction {
  type: contactFormActionTypes
  value?: string
  loading?: boolean
}

export type ContactFormAction = IContactFormAction

export interface IAboutPageData {
  allContentfulAbout: {
    edges: {
      node: {
        description: { json: Document }
        instagramUsername: string
        pageHeader: string
        twitterUsername: string
      }
    }[]
  }
}

export interface ISocialData {
  twitterFollowerCount?: number
  youTubeFollowerCount?: string
  instagramFollowerCount?: number
}
