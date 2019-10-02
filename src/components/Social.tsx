import React, { FunctionComponent } from "react"
import Skeleton from "react-loading-skeleton"
import numeral from "numeral"
import { ISocialProps } from "../types"

export const Social: FunctionComponent<ISocialProps> = props => {
  return (
    <div className="social__image__wrapper">
      <a href={props.to} target="_blank" className="social__image">
        <img src={props.image} alt={props.alt} className="social__image" />
      </a>
      <div className="social__image__count">
        {props.loading ? (
          <Skeleton width={50} />
        ) : props.followers ? (
          +props.followers > 1000 ? (
            numeral(+props.followers).format("0.0a")
          ) : (
            +props.followers
          )
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
