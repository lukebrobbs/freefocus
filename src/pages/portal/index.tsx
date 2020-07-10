import React, { useContext, useState } from "react"
import { UserContext } from "../../providers/UserProvider"
import { LoadingSpinner } from "../../components/LoadingSpinner"
import { navigate } from "gatsby"

const Portal = () => {
  const { signOut, user, loading } = useContext(UserContext)
  const [url, setUrl] = useState("")

  const handleSignOut = () => {
    signOut()
  }

  const handleGenerateLink = async () => {
    const headers = new Headers({
      "content-Type": "application/json",
    })
    const response = await fetch(
      `${process.env.GATSBY_SOCIAL_API_URL}/url/create`,
      {
        method: "GET",
        headers,
      }
    )
    const data = await response.json()
    setUrl(data.url)
  }

  if (loading) {
    return (
      <div className="portal__signin__loading__wrapper">
        <LoadingSpinner />
      </div>
    )
  }
  if (!user) {
    navigate("/portal/login")
    return <></>
  }

  return (
    <div className="portal__wrapper">
      <div>
        <div className="portal__homepage__user__profile__header">
          <div className="portal__profile__img__wrapper">
            <img
              className="portal__homepage__user__profile__picture"
              src={`${user.photoURL ||
                "https://res.cloudinary.com/dz4zcbe69/image/upload/v1594059729/FreeFocus/freefocus-favicon.png"}  `}
            />
          </div>
          <h1>{user.displayName}</h1>
        </div>
      </div>
      <div>
        <button className="site__button" onClick={handleGenerateLink}>
          Generate Link
        </button>
        <p>{url}</p>
      </div>
      <button onClick={() => handleSignOut()} className="site__button">
        SIGN OUT
      </button>
    </div>
  )
}

export default Portal
