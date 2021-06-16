import React, { FunctionComponent } from "react"
import numeral from "numeral"
import { ISocialProps } from "../types"
import { LoadingSpinner } from "./LoadingSpinner"

export const Social: FunctionComponent<ISocialProps> = (props) => {
  return (
    <div className="text-center flex flex-col h-8 lg:flex-row lg:flex-shrink-0 lg:m-1 pr-4">
      <a href={props.to} target="_blank" className="h-8 w-8 lg:mr-2 mx-auto">
        <img src={props.image} alt={props.alt} className="h-full mr-1" />
      </a>
      <div className="uppercase tracking-normal self-center pt-1">
        {props.loading ? (
          <div style={{ position: "relative" }}>
            <LoadingSpinner />
          </div>
        ) : props.followers ? (
          +props.followers > 1000 ? (
            numeral(+props.followers).format("0.0a")
          ) : Number.isNaN(+props.followers) ? (
            props.followers
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
