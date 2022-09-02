import "bootstrap/dist/css/bootstrap.min.css"
import "katex/dist/katex.min.css"
import React from "react"
import Layout from "./src/components/Layout"
import { ThemeProvider } from "./src/context/ThemeContext"

import Terser from "terser"
import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "./src/lib/themes"

function setColorsByTheme(
  preferedColorKey = "dark",
  secondaryColorKey = "light"
) {
  const colors = `🌈`
  const colorModeKey = "🔑"
  const colorModeCssProp = "⚡️"

  const mql = window.matchMedia(`(prefers-color-scheme: ${preferedColorKey})`)
  const prefersDarkFromMQ = mql.matches
  const persistedPreference = localStorage.getItem(colorModeKey)

  let colorMode = preferedColorKey
  const hasUsedToggle = typeof persistedPreference === "string"

  if (hasUsedToggle) {
    colorMode = persistedPreference
  } else {
    colorMode = prefersDarkFromMQ ? preferedColorKey : secondaryColorKey
  }

  const root = document.documentElement
  root.style.setProperty(colorModeCssProp, colorMode)
  Object.entries(JSON.parse(colors)).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`
    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("🌈", JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP)

  let calledFunction = `(${boundFn})()`
  calledFunction = Terser.minify(calledFunction).code

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = ({ preferedColorKey = "dark" }) => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme[preferedColorKey]};`
    },
    ""
  )

  const wrappedInSelector = `html { ${cssVariableString} }`

  return <style>{wrappedInSelector}</style>
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />)
  setPreBodyComponents(<MagicScriptTag />)
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
