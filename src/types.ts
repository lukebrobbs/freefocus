export interface ISEOProps {
  description?: string
  lang?: string
  meta?: string
  title?: string
}

export interface ISiteMetaQuery {
  siteMetadata: {
    title: string
    description: string
    author: string
  }
}
