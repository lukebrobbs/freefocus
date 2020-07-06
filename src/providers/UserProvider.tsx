import React, {
  createContext,
  FunctionComponent,
  useReducer,
  useEffect,
} from "react"
import { auth, generateUserDocument, getUserDocument } from "../firebase"
import { navigate } from "gatsby"

interface Context {
  user: firebase.firestore.DocumentData
  signOut: () => void

  signIn: (
    email: string,
    password: string
  ) => Promise<firebase.firestore.DocumentData>

  signUp: (
    email: string,
    password: string,
    name: string
  ) => Promise<firebase.firestore.DocumentData>
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
            status: "IDLE",
          }
        case "SET_ERR":
          return {
            ...state,
            loading: false,
            error: action.error,
            status: "IDLE",
          }
      }
    default:
      return { ...state }
  }
}

const defaultContext = {
  user: null,
  signOut: () => {},
  signIn: (email: string, password: string) => new Promise(null),
  signUp: (email: string, password: string, name: string) => null,
  loading: true,
  error: "",
}
export const UserContext = createContext<Context>(defaultContext)

const UserProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    ...defaultContext,
    status: "IDLE",
  })

  useEffect(() => {
    auth.onAuthStateChanged(async authUser => {
      if (!state.user && authUser) {
        dispatch({ type: "AUTH_STATE_CHANGE" })
        const user = await getUserDocument(authUser.uid)
        dispatch({ type: "SET_USER", user })
      } else {
        dispatch({ type: "SET_USER", user: null })
      }
    })
  }, [])

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" })
    auth.signOut().then(() => {
      navigate("/portal/login")
    })
  }

  const signIn = async (email: string, password: string) => {
    dispatch({ type: "AUTH_STATE_CHANGE" })

    try {
      const doc = await auth.signInWithEmailAndPassword(email, password)
      const user = await getUserDocument(doc.user.uid)
      dispatch({ type: "SET_USER", user })
      return user
    } catch (err) {
      dispatch({ type: "SET_ERR", error: err.message })
      throw new Error(err)
    }
  }

  const signUp = async (email: string, password: string, name: string) => {
    dispatch({ type: "AUTH_STATE_CHANGE" })
    try {
      const doc = await auth.createUserWithEmailAndPassword(email, password)
      const newUser = await generateUserDocument(doc.user, {
        displayName: name,
      })
      dispatch({ type: "SET_USER", user: newUser })
      return newUser
    } catch (err) {
      dispatch({ type: "SET_ERR", error: err.message })
      throw new Error(err)
    }
  }

  return (
    <UserContext.Provider value={{ ...state, signOut, signIn, signUp }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
