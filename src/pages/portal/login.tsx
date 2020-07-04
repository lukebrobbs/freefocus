import React, { useContext } from "react"
import { SignIn } from "../../components/portal/SignIn"
import { UserContext } from "../../providers/UserProvider"
import { navigate } from "gatsby"

const Login = () => {
  const { user, loading } = useContext(UserContext)

  if (loading) {
    return <p>Loading...</p>
  }
  if (user) {
    navigate("/portal")
  }
  return <SignIn />
}

export default Login
