import { Document } from "@contentful/rich-text-types"
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"

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

interface IAllContentfulNode {
  node: {
    description: RenderRichTextData<ContentfulRichTextGatsbyReference>

    contactEmail: string
    image: {
      gatsbyImageData: any
    }
    name: string
    id: string
    twitterUsername: string
    instagramUsername: string
    facebookUsername: string
    youtubeUsername: string
    tikTokUsername: string
    tier: number
    facebookFollowerCount: number
    tikTokFollowerCount: number
    instagramFollowerCount: number
  }
}

export interface IAllContentfulTalent extends IAllContentfulNode {
  defaultOpen: boolean
}

export interface ITalentModalProps extends IAllContentfulNode {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IIndexPageProps {
  data: {
    allContentfulTalent: { edges: IAllContentfulTalent[] }
  }
  location: Location
  path: string
}

export interface IMainLogoQuery {
  contentfulAsset: {
    gatsbyImageData: any
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
        description: RenderRichTextData<ContentfulRichTextGatsbyReference>
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

export interface ContentfulArticle {
  id: string
  cardTitle: string
  cardImage: any
  headlineImage: any
  image: any
  articleTitle: string
  content: {
    json: Document
  }
}

export interface ContentfulHeadlineArticle {
  title: string
  articles: ContentfulArticle[]
}

export interface ContentfulArticleData {
  allContentfulArticle: {
    edges: {
      node: ContentfulArticle
    }[]
  }
  contentfulHeadlineArticles: {
    articles: ContentfulHeadlineArticle
  }
}
