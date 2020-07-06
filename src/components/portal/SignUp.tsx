import React, { FunctionComponent, useState, useContext } from "react"
import { navigate } from "gatsby"
import { LoadingSpinner } from "../LoadingSpinner"
import { UserContext } from "../../providers/UserProvider"

export const SignUp: FunctionComponent = () => {
  const { user, loading, signUp, error } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    signUp(email, password, name).catch(err => {
      console.error("Error signing up ", err)
    })
  }

  if (user) {
    navigate("/portal")
  }

  return (
    <div className="portal__wrapper">
      <div className="portal__signUp__wrapper">
        {loading && <LoadingSpinner />}
        <h1>Free Focus Portal</h1>
        <h2>Sign up</h2>
        <div>
          <form>
            <label htmlFor="userName">Name:</label>
            <input
              name="userName"
              value={name}
              className="name__input"
              id="userName"
              onChange={event => setName(event.target.value)}
            />
            <label htmlFor="userEmail">Email:</label>
            <input
              type="email"
              name="userEmail"
              value={email}
              className="name__input"
              id="userEmail"
              onChange={event => setEmail(event.target.value)}
            />
            <label htmlFor="userPassword">Password:</label>
            <input
              type="password"
              name="userPassword"
              value={password}
              className="name__input"
              id="userPassword"
              onChange={event => setPassword(event.target.value)}
            />
            {error && error}
            <button
              onClick={e => {
                handleSubmit(e)
              }}
              style={{ alignSelf: "flex-start" }}
              className="site__button"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
