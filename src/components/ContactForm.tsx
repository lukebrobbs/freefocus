import React, { useReducer } from "react"
import { IContactFormState, ContactFormAction } from "../types"
import { LoadingSpinner } from "./LoadingSpinner"

const contactFormReducer = (
  state: IContactFormState,
  action: ContactFormAction
): IContactFormState => {
  const { value, type, loading } = action
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
    case "SET_LOADING":
      return {
        ...state,
        loading,
      }
    case "SET_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
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
    loading: false,
    success: false,
  }
  const [state, dispatch] = useReducer(contactFormReducer, initialState)

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch({ type: "SET_LOADING", loading: true })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", state }),
    })
      .then(() => dispatch({ type: "SET_SUCCESS" }))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <form
      className={`contactForm__wrapper`}
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      {state.success ? (
        <p className="contact__header">
          Thank you, your enquiry has been submitted
        </p>
      ) : (
        <>
          <div className="contactForm__emailName__wrapper">
            {state.loading && <LoadingSpinner />}
            <input
              placeholder="NAME"
              className={`name__input ${
                state.loading ? "contact__form__loading" : ""
              }`}
              id={`${state.loading ? "contact__form__loading" : ""}`}
              value={state.name}
              disabled={state.loading}
              onChange={e =>
                dispatch({ type: "SET_NAME", value: e.target.value })
              }
              name="name"
              required
            />
            <input
              placeholder="EMAIL"
              type="email"
              id={`${state.loading ? "contact__form__loading" : ""}`}
              className={`email__input ${
                state.loading ? "contact__form__loading" : ""
              }`}
              disabled={state.loading}
              value={state.email}
              onChange={e =>
                dispatch({ type: "SET_EMAIL", value: e.target.value })
              }
              required
              name="email"
            />
          </div>
          <input
            placeholder="SUBJECT"
            className={`contactForm__input ${
              state.loading ? "contact__form__loading" : ""
            }`}
            id={`${state.loading ? "contact__form__loading" : ""}`}
            value={state.subject}
            onChange={e =>
              dispatch({ type: "SET_SUBJECT", value: e.target.value })
            }
            disabled={state.loading}
            required
            name="subject"
          />
          <textarea
            placeholder="MESSAGE"
            className={`contactForm__input textArea `}
            id={`${state.loading ? "contact__form__loading" : ""}`}
            value={state.message}
            disabled={state.loading}
            onChange={e =>
              dispatch({ type: "SET_MESSAGE", value: e.target.value })
            }
            required
            name="message"
          />
          <button className="site__button" disabled={state.loading}>
            SEND
          </button>
        </>
      )}
    </form>
  )
}
