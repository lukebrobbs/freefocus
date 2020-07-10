import React, { useEffect, useState } from "react"
import { SignUp } from "../../components/portal/SignUp"
import queryString from "query-string"
import { LoadingSpinner } from "../../components/LoadingSpinner"
import { RequestLink } from "../../components/portal/RequestLink"

export default props => {
  const [role, setRole] = useState("")
  const [loading, setloading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setloading(true)
    const { token } = queryString.parse(props.location.search)

    const checkToken = async () => {
      const headers = new Headers({
        "content-Type": "application/json",
      })
      try {
        const response = await fetch(
          `${process.env.GATSBY_SOCIAL_API_URL}/token/validate`,
          {
            method: "POST",
            headers,
            body: JSON.stringify({
              token,
            }),
          }
        )
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setRole(data.role)
      } catch (err) {
        setError(err.message)
      }
      setloading(false)
    }

    checkToken()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <RequestLink />
  }
  return <SignUp role={role} />
}
