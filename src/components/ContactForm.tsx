import React, { useReducer } from "react"
import { IContactFormState, IContactFormAction } from "../types"

const contactFormReducer = (
  state: IContactFormState,
  action: IContactFormAction
): IContactFormState => {
  const { value, type } = action
  switch (type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: value,
      }
    case "SET_MESSAGE":
      return {
        ...state,
        message: value,
      }
    case "SET_NAME":
      return {
        ...state,
        name: value,
      }
    case "SET_SUBJECT":
      return {
        ...state,
        subject: value,
      }
    default:
      throw new Error()
  }
}

export const ContactForm = () => {
  const initialState: IContactFormState = {
    email: "",
    message: "",
    name: "",
    subject: "",
  }
  const [state, dispatch] = useReducer(contactFormReducer, initialState)

  return (
    <form className="contactForm__wrapper">
      <div className="contactForm__emailName__wrapper">
        <input
          placeholder="NAME"
          className="name__input"
          value={state.name}
          onChange={e => dispatch({ type: "SET_NAME", value: e.target.value })}
        />
        <input
          placeholder="EMAIL"
          type="email"
          className="email__input"
          value={state.email}
          onChange={e => dispatch({ type: "SET_EMAIL", value: e.target.value })}
        />
      </div>
      <input
        placeholder="SUBJECT"
        className="contactForm__input"
        value={state.subject}
        onChange={e => dispatch({ type: "SET_SUBJECT", value: e.target.value })}
      />
      <textarea
        placeholder="MESSAGE"
        className="contactForm__input textArea"
        value={state.message}
        onChange={e => dispatch({ type: "SET_MESSAGE", value: e.target.value })}
      />
      <button className="contactForm__submitButton">SEND</button>
    </form>
  )
}
