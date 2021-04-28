import * as React from "react"
import { ContentfulArticle } from "../types"
import { GatsbyImage } from "gatsby-plugin-image"

import { ArticleModal } from "./ArticleModal"

export const Article = ({
  cardTitle,
  cardImage,
  articleTitle,
  image,
  content,
}: ContentfulArticle) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setIsOpen(true)
    }
  }
  return (
    <>
      <ArticleModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={articleTitle}
        body={content}
        image={image}
      />
      <div
        className="transition-all duration-200 ease-in-out transform relative rounded-sm overflow-hidden hover:scale-102 leading-none"
        onKeyPress={handleKeyPress}
        role="button"
        aria-haspopup
        tabIndex={0}
        onClick={() => setIsOpen(true)}
      >
        <GatsbyImage image={cardImage.gatsbyImageData} alt={cardTitle} />
        <div className="w-full h-full absolute top-0 bg-gray-700 bg-opacity-50 flex items-end justify-center">
          <h3 className="text-white p-3 uppercase sm:text-sm font-semibold">
            {cardTitle}
          </h3>
        </div>
      </div>
    </>
  )
}
