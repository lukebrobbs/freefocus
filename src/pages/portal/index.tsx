import React, { useContext } from "react"
import { UserContext } from "../../providers/UserProvider"
import { LoadingSpinner } from "../../components/LoadingSpinner"

const Portal = () => {
  const { signOut, user } = useContext(UserContext)

  const handleSignOut = () => {
    signOut()
  }

  if (!user) {
    return (
      <div className="portal__signin__loading__wrapper">
        <LoadingSpinner />
      </div>
    )
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
      <button onClick={() => handleSignOut()} className="site__button">
        SIGN OUT
      </button>
    </div>
  )
}

export default Portal
