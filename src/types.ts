import { FluidObject } from "gatsby-image"

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
