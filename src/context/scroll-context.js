import React, { useState } from "react"

const ScrollContext = React.createContext()

const ScrollProvider = props => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const isSSR = typeof window === "undefined"

  if (!isSSR) {
    document.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY)
    })

    return (
      <ScrollContext.Provider
        value={{
          scrollPosition,
        }}
      >
        {props.children}
      </ScrollContext.Provider>
    )
  }
  return <></>
}

function useScroll() {
  const context = React.useContext(ScrollContext)
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider")
  }
  return context
}

export { ScrollProvider, useScroll }
