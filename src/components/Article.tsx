import * as React from "react"
import { ContentfulArticle } from "../types"
import Img from "gatsby-image"
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
        className="relative rounded-sm overflow-hidden"
        onKeyPress={handleKeyPress}
        role="button"
        aria-haspopup
        tabIndex={0}
        onClick={() => setIsOpen(true)}
      >
        <Img fluid={cardImage.fluid} alt={cardTitle} />
        <div className="w-full h-full absolute top-0 bg-freefocus-blue bg-opacity-50 flex items-center justify-center">
          <h3 className="text-white font-bold text-xl xs:text-3xl px-6">
            {cardTitle}
          </h3>
        </div>
      </div>
    </>
  )
}
