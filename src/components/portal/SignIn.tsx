import React, { FunctionComponent, useState, useContext } from "react"
import { auth } from "../../firebase"
import { navigate } from "gatsby"
import { UserContext } from "../../providers/UserProvider"

export const SignIn: FunctionComponent = () => {
  const { signIn, error } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault()
    signIn(email, password)
      .then(() => {
        navigate("/portal")
      })
      .catch(err => {
        console.error("Error signing in with password and email", err)
      })
  }

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget

    if (name === "userEmail") {
      setEmail(value)
    } else if (name === "userPassword") {
      setPassword(value)
    }
  }

  return (
    <div className="portal__wrapper">
      <div className="portal__signin__wrapper">
        <h1>Free Focus Portal</h1>
        <div>
          {error !== null && <div>{error}</div>}
          <form>
            <label htmlFor="userEmail">Email:</label>
            <input
              type="email"
              name="userEmail"
              value={email}
              className="name__input"
              id="userEmail"
              onChange={event => onChangeHandler(event)}
            />
            <label htmlFor="userPassword">Password:</label>
            <input
              type="password"
              name="userPassword"
              value={password}
              className="name__input"
              id="userPassword"
              onChange={event => onChangeHandler(event)}
            />
            <button
              onClick={event => {
                signInWithEmailAndPasswordHandler(event, email, password)
              }}
              style={{ alignSelf: "flex-start" }}
              className="site__button"
            >
              SIGN IN
            </button>
          </form>

          {/* <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link
            to="passwordReset"
            className="text-blue-500 hover:text-blue-600"
          >
            Forgot Password?
          </Link>
        </p> */}
        </div>
      </div>
    </div>
  )
}
