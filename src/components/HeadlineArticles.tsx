import React from "react"
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper"
import Img from "gatsby-image"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"
import { ContentfulHeadlineArticle } from "../types"

SwiperCore.use([Pagination, A11y, Autoplay])

export const HeadlineArticles = ({ articles }: ContentfulHeadlineArticle) => {
  return (
    <div className="-mx-4 md:mx-0 rounded-sm">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass:
            "w-2 h-2 inline-block rounded-lg bg-gray-50 bg-opacity-60 mx-1",
          bulletActiveClass: "bg-freefocus-secondary bg-opacity-100",
        }}
        autoplay={{ delay: 10000 }}
        className="py-6 h-60 rounded-sm"
      >
        {articles.map(article => {
          const sources = [
            article.cardImage.fluid,
            {
              ...article.headlineImage.fluid,
              media: `(min-width: 768px)`,
            },
          ]
          return (
            <SwiperSlide
              key={article.id}
              className="bg-gray-800 relative rounded-sm"
            >
              <Img fluid={sources} alt={article.cardTitle} />
              <div className="absolute w-full h-full top-0 bg-gray-800 bg-opacity-40  flex items-center">
                <h2 className="text-white text-3xl font-bold px-6">
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
