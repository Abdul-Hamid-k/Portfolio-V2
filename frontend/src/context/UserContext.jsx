import React, { createContext, useState } from 'react'


const UserDataContext = createContext({})

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    summaryHeading: "",
    summaryContent: ""
  })
  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext
export { UserDataContext }