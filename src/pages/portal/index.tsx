import React, { useContext } from "react"
import { UserContext } from "../../providers/UserProvider"

const Portal = () => {
  const { signOut, user } = useContext(UserContext)

  const handleSignOut = () => {
    signOut()
  }

  if (!user) {
    return <p>Loading</p>
  }

  return (
    <div>
      <div>
        <div
          style={{
            background: `url(${user.photoURL ||
              "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png)  no-repeat center center"}`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
        ></div>
        <div>
          <h2>{user.displayName}</h2>
          <h3>{user.email}</h3>
        </div>
      </div>
      <button onClick={() => handleSignOut()}>Sign out</button>
    </div>
  )
}

export default Portal
