import * as React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Options } from "@contentful/rich-text-react-renderer"

export const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_, children) => (
      <h1 className="text-2xl font-semibold mb-2 uppercase">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="text-xl font-semibold mb-2 uppercase">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="text-lg font-semibold mb-2 uppercase">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="text-md font-semibold mb-2 uppercase">{children}</h4>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="mb-4">{children}</p>,
    [BLOCKS.LIST_ITEM]: (_, children) => <li className="mb-2">{children}</li>,
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="list-disc mb-4">{children}</ul>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
    [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
  },
}
