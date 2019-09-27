import { FluidObject } from "gatsby-image"
import { TextEmphasisColorProperty } from "csstype"

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
      content: {
        content: {
          value: string
        }[]
      }[]
    }
    contactEmail: string
    image: {
      fluid: FluidObject
    }
    name: string
    id: string
  }
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
  followers: string
  alt: string
}

type contactFormActionTypes =
  | "SET_NAME"
  | "SET_EMAIL"
  | "SET_SUBJECT"
  | "SET_MESSAGE"

export interface IContactFormState {
  name: string
  email: string
  subject: string
  message: string
}

export interface IContactFormAction {
  type: contactFormActionTypes
  value: string
}
