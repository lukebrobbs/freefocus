import React, {
  createContext,
  useEffect,
  useState,
  FunctionComponent,
  useReducer,
} from "react"
import { auth, generateUserDocument } from "../firebase"
import { navigate } from "gatsby"

interface Context {
  user: firebase.firestore.DocumentData
  signOut: () => void
  loading: boolean
  error: string
}

interface State extends Context {
  status: "IDLE" | "FETCHING" | "ERROR"
}

const userReducer = (state, action): State => {
  switch (state.status) {
    case "IDLE":
      switch (action.type) {
        case "AUTH_STATE_CHANGE":
          return {
            ...state,
            loading: true,
            status: "FETCHING",
          }
        case "SIGN_OUT":
          return {
            ...state,
            user: null,
            status: "IDLE",
          }
      }
    case "FETCHING":
      switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            user: action.user,
            loading: false,
          }
        case "SET_ERR":
          return {
            ...state,
            loading: false,
            error: action.error,
            status: "ERROR",
          }
      }
    default:
      return { ...state }
  }
}

const defaultContext = {
  user: null,
  signOut: () => {},
  loading: false,
  error: "",
}
export const UserContext = createContext<Context>(defaultContext)

const UserProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    ...defaultContext,
    status: "IDLE",
  })

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" })
    auth.signOut()
  }

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        navigate("/portal/login")
      }
      dispatch({ type: "AUTH_STATE_CHANGE" })
      generateUserDocument(userAuth, {})
        .then(user => {
          dispatch({ type: "SET_USER", user: user || null })
        })
        .catch(err => {
          dispatch({ type: "SET_ERR", error: err })
        })
    })
  }, [])

  return (
    <UserContext.Provider value={{ ...state, signOut }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
