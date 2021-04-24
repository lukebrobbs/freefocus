import React from "react"
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper"
import { GatsbyImage, withArtDirection, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { ContentfulHeadlineArticle } from "../types"

// Import Swiper styles
import "swiper/swiper.scss"
import "../styles/pagination.scss"

SwiperCore.use([Pagination, A11y, Autoplay])

export const HeadlineArticles = ({ articles }: ContentfulHeadlineArticle) => {
  return (
    <div className="-mx-4 md:mx-0 rounded-sm">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass:
            "w-2 h-2 inline-block rounded-lg bg-gray-50 bg-opacity-60 mx-1",
          bulletActiveClass: "bg-freefocus-secondary bg-opacity-100",
        }}
        autoplay={{ delay: 10000 }}
        className="py-6 h-72 rounded-sm"
      >
        {articles.map(article => {
          const images = withArtDirection(article.cardImage.gatsbyImageData, [
            {
              media: `(min-width: 768px)`,
              image: article.headlineImage.gatsbyImageData,
            },
          ])

          return (
            <SwiperSlide
              key={`headline-${article.id}`}
              className="bg-gray-800 relative rounded-sm"
            >
              <GatsbyImage image={images} alt={article.cardTitle} />
              <div className="absolute w-full h-full top-0 bg-freefocus-blue bg-opacity-30  flex items-center">
                <h2 className="text-white text-2xl xs:text-3xl font-bold px-6">
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
