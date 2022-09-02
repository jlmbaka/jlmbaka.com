const lightTheme = {
  primary: "#222020",
  secondary: "#ffffff",
  background: "#ffffff",
  gray: "#b3b3b3", // Test CCCCCC or bbbbbb
  gray1: "#f9f7f6",
  gray2: "#6d676d",
  text: "#000000",
  body: "#ffffff",
}

const darkTheme = {
  primary: "#ffffff",
  secondary: "#222020",
  background: "#222020",
  gray: "#b3b3b3",
  gray1: "#6d676d",
  gray2: "#f9f7f6",
  text: "#ffffff",
  body: "#222020",
}

export { lightTheme, darkTheme }

export const COLOR_MODE_KEY = `color-mode`
export const INITIAL_COLOR_MODE_CSS_PROP = `--initial-color-mode`
export const COLORS = {
  primary: { light: "#222020", dark: "#ffffff" },
  secondary: { light: "#ffffff", dark: "#222020" },
  background: { light: "#ffffff", dark: "#222020" },
  gray: { light: "#b3b3b3", dark: "#b3b3b3" },
  gray1: { light: "#f9f7f6", dark: "#6d676d" },
  gray2: { light: "#6d676d", dark: "#f9f7f6" },
  text: { light: "#000000", dark: "#ffffff" },
  body: { light: "#ffffff", dark: "#222020" },
}
