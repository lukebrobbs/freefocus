import React, { FunctionComponent } from "react"
import numeral from "numeral"
import { ISocialProps } from "../types"

export const Social: FunctionComponent<ISocialProps> = props => {
  return (
    <div className="social__image__wrapper">
      <img src={props.image} alt={props.alt} className="social__image" />
      <div className="social__image__count">
        {props.loading ? "" : numeral(+props.followers).format("0.0a")}
      </div>
    </div>
  )
}
