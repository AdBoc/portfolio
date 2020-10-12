import React, { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, GlobalStyles, lightTheme } from "../styles/themes"

export const themeContext = createContext<{
  theme: string
  changeTheme: () => void;
}>({
  theme: "light",
  changeTheme: () => null
})

const ThemeContextProvider: React.FC = ({ children }) => {
  const localTheme = localStorage.getItem("theme")
  if (!localTheme) localStorage.setItem("theme", "light")

  const [theme, setTheme] = useState(localTheme || "light")
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </themeContext.Provider>
  )
}

export default ThemeContextProvider