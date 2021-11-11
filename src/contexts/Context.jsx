import { createContext, useState } from 'react'

export const Context = createContext({})

function ContextPovider({ children }) {
  const [menu, setMenu] = useState(false)
  const [profile, setProfile] = useState(false)

  function handleMenu() {
    setMenu(menu ? false : true)

    if (profile === true) {
      setProfile(false)
    }
  }

  function handleProfile() {
    setProfile(profile ? false : true)

    if (menu === true) {
      setMenu(false)
    }
  }

  return(
    <Context.Provider 
    value={{
      menu,
      profile,
      handleMenu,
      handleProfile
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextPovider