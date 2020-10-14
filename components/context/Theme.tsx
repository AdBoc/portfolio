import React, { createContext, useEffect, useState } from "react"
import { GlobalStyles } from "../styles/themes"

export const themeContext = createContext<{
  theme: any
  changeTheme: () => void;
}>({
  theme: undefined,
  changeTheme: () => null
})

const ThemeContextProvider: React.FC = ({ children }) => {
  useEffect(() => {
    // @ts-ignore
    setTheme(window.__theme)
  }, [])

  const [theme, setTheme] = useState<undefined | string>( undefined)

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      <GlobalStyles />
      {children}
    </themeContext.Provider>
  )
}

export default ThemeContextProvider