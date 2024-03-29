import React, { useState } from "react"
import SwiperCore, { A11y, Autoplay, Navigation } from "swiper"
import { withArtDirection } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { ContentfulHeadlineArticle, ContentfulLinkText } from "../types"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

// Import Swiper styles
import "swiper/swiper.min.css"
import "../styles/navigation.css"
import { ArticleModal } from "./ArticleModal"
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"

SwiperCore.use([Navigation, A11y, Autoplay])

export const HeadlineArticles = ({ articles }: ContentfulHeadlineArticle) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentArticle, setCurrentArticle] = useState<{
    id: string
    title: string
    body: RenderRichTextData<ContentfulRichTextGatsbyReference>
    image: any
    spotifyLink: ContentfulLinkText
    shopLink: ContentfulLinkText
    otherLink: ContentfulLinkText
    contactEmail: string
  }>({
    id: articles.articles[0].id,
    title: articles.articles[0].articleTitle,
    body: articles.articles[0].content,
    image: articles.articles[0].image,
    shopLink: articles.articles[0].shopLink,
    spotifyLink: articles.articles[0].spotifyLink,
    otherLink: articles.articles[0].otherLink,
    contactEmail: articles.articles[0].contactEmail,
  })

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      history.pushState(null, "", `?article=${currentArticle.id}`)
      setIsOpen(true)
    }
  }
  return (
    <div className="-mx-4 md:mx-0 rounded-sm">
      <ArticleModal isOpen={isOpen} setIsOpen={setIsOpen} {...currentArticle} />
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        speed={800}
        navigation
        loop
        autoplay={{ delay: 5000 }}
        className="transition-all duration-200 ease-in-out transform py-6 h-72 rounded-sm hover:scale-102"
      >
        {articles.articles.map((article) => {
          const images = withArtDirection(article.cardImage.gatsbyImageData, [
            {
              media: `(min-width: 768px)`,
              image: article.headlineImage.gatsbyImageData,
            },
          ])
          const bgImage = convertToBgImage(images)

          return (
            <SwiperSlide
              key={`headline-${article.id}`}
              className="bg-gray-800 relative rounded-sm cursor-pointer"
              onClick={() => {
                setCurrentArticle({
                  id: article.id,
                  body: article.content,
                  title: article.articleTitle,
                  image: article.image,
                  shopLink: article.shopLink,
                  spotifyLink: article.spotifyLink,
                  otherLink: article.otherLink,
                  contactEmail: article.contactEmail,
                })
                history.pushState(null, "", `?article=${article.id}`)
                setIsOpen(true)
              }}
              onKeyPress={handleKeyPress}
              role="button"
              aria-haspopup
              tabIndex={0}
            >
              <BackgroundImage
                Tag="section"
                // Spread bgImage into BackgroundImage:
                {...bgImage}
                preserveStackingContext
                className="w-full h-full"
              >
                <div className="absolute w-full h-full top-0 flex items-end">
                  <h2 className="uppercase md:text-md font-semibold p-2 bg-white bg-opacity-80 w-full mb-3">
                    {article.cardTitle}
                  </h2>
                </div>
              </BackgroundImage>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
