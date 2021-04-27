import React, { useReducer } from "react"
import { Map } from "./Map"
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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch({ type: "SET_LOADING", loading: true })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => dispatch({ type: "SET_SUCCESS" }))
      .catch((error) => alert(error))

    e.preventDefault()
  }

  return (
    <form
      className={`flex flex-col relative lg:col-span-6`}
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      {state.success ? (
        <p className="text-center mt-4">
          Thank you, your enquiry has been submitted
        </p>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row">
            {state.loading && <LoadingSpinner />}
            <input
              placeholder="NAME"
              className={`w-full text-xs font-semibold inline-block bg-gray-200 text-gray-500 my-2 mr-4 p-3 disabled:opacity-40`}
              value={state.name}
              disabled={state.loading}
              onChange={(e) =>
                dispatch({ type: "SET_NAME", value: e.target.value })
              }
              name="name"
              required
            />
            <input
              placeholder="EMAIL"
              type="email"
              className={`w-full text-xs font-semibold inline-block bg-gray-200 text-gray-500 my-2 p-3 disabled:opacity-40`}
              disabled={state.loading}
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "SET_EMAIL", value: e.target.value })
              }
              required
              name="email"
            />
          </div>
          <input
            placeholder="SUBJECT"
            className={`w-full text-xs font-semibold inline-block bg-gray-200 text-gray-500 my-2 p-3 disabled:opacity-40`}
            value={state.subject}
            onChange={(e) =>
              dispatch({ type: "SET_SUBJECT", value: e.target.value })
            }
            disabled={state.loading}
            required
            name="subject"
          />
          <textarea
            placeholder="MESSAGE"
            className={`w-full text-xs font-semibold inline-block bg-gray-200 text-gray-500 my-2 p-3 disabled:opacity-40 h-half-screen`}
            value={state.message}
            disabled={state.loading}
            onChange={(e) =>
              dispatch({ type: "SET_MESSAGE", value: e.target.value })
            }
            required
            name="message"
          />
          <button
            className="transition-all self-center duration-100 py-1 px-8 mt-2 bg-freefocus-tertiary text-white text-xs font-semibold cursor-pointer hidden lg:flex lg:self-end hover:bg-opacity-80 disabled:opacity-80"
            disabled={state.loading}
          >
            SEND
          </button>
        </>
      )}
    </form>
  )
}
