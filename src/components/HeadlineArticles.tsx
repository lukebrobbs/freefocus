import React, { useState } from "react"
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper"
import { GatsbyImage, withArtDirection, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { ContentfulHeadlineArticle } from "../types"

// Import Swiper styles
import "swiper/swiper.scss"
import "../styles/pagination.scss"
import { ArticleModal } from "./ArticleModal"
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"

SwiperCore.use([Pagination, A11y, Autoplay])

export const HeadlineArticles = ({ articles }: ContentfulHeadlineArticle) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentArticle, setCurrentArticle] = useState<{
    title: string
    body: RenderRichTextData<ContentfulRichTextGatsbyReference>
    image: any
  }>({
    title: articles[0].articleTitle,
    body: articles[0].content,
    image: articles[0].image,
  })

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setIsOpen(true)
    }
  }
  return (
    <div className="-mx-4 md:mx-0 rounded-sm">
      <ArticleModal isOpen={isOpen} setIsOpen={setIsOpen} {...currentArticle} />
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        speed={800}
        pagination={{
          clickable: true,
          bulletClass:
            "w-2 h-2 inline-block rounded-lg bg-gray-50 bg-opacity-60 mx-1",
          bulletActiveClass: "bg-freefocus-secondary bg-opacity-100",
        }}
        autoplay={{ delay: 5000 }}
        className="transition-all duration-200 ease-in-out transform py-6 h-72 rounded-sm hover:scale-102"
      >
        {articles.map((article) => {
          const images = withArtDirection(article.cardImage.gatsbyImageData, [
            {
              media: `(min-width: 768px)`,
              image: article.headlineImage.gatsbyImageData,
            },
          ])

          return (
            <SwiperSlide
              key={`headline-${article.id}`}
              className="bg-gray-800 relative rounded-sm cursor-pointer"
              onClick={() => {
                setCurrentArticle({
                  body: article.content,
                  title: article.articleTitle,
                  image: article.image,
                })
                setIsOpen(true)
              }}
              onKeyPress={handleKeyPress}
              role="button"
              aria-haspopup
              tabIndex={0}
            >
              <GatsbyImage image={images} alt={article.cardTitle} />
              <div className="absolute w-full h-full top-0 bg-gray-700 bg-opacity-50 flex items-end">
                <h2 className="uppercase text-white text-2xl  font-semibold px-6 pb-10">
                  {article.cardTitle}
                </h2>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
