import React, { FunctionComponent } from "react"
import numeral from "numeral"
import { ISocialProps } from "../types"

export const Social: FunctionComponent<ISocialProps> = props => {
  return (
    <div className="social__image__wrapper">
      <a href={props.to} target="_blank" className="social__image">
        <img src={props.image} alt={props.alt} className="social__image" />
      </a>
      <div className="social__image__count">
        {props.loading ? "" : numeral(+props.followers).format("0.0a")}
      </div>
    </div>
  )
}
