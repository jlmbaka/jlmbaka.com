import { createGlobalStyle } from "styled-components"
import { screen, color } from "../lib/utils"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Rubik", sans-serif;
  color: ${color.primary};
}

html,
body {
  min-height: 100%;
}

p {
  margin: 16px auto;
  line-height: 1.5em;
}

a {
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  color: ${color.primary};
  opacity: 0.7;
  transition: background 0.35s, border 0.35s, opacity 0.35s;
  &:hover {
    opacity: 1;
    color: ${color.primary};
  }
}

footer {
  width: 100%;
  padding: 24px 0;
  display: block;
  p {
    color: #bbb;
  }
}

.footer__container {
  @media (max-width: ${screen.tablet}) {
    padding: 0 15px;
  }
}
`

export default GlobalStyle
