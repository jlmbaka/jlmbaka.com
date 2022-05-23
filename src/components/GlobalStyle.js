import { createGlobalStyle } from "styled-components"
import { screen } from "../lib/utils"

// @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  font-family: "Rubik", sans-serif;
}

html,
body {
  background: var(--color-secondary);
  color: var(--color-primary);
  transition: background 0.2s ease-in, color 0.2s ease-in;
}

p {
  margin: 16px auto;
  line-height: 1.5em;
}

a {
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  color: var(--color-primary);
  opacity: 0.7;
  transition: background 0.35s, border 0.35s, opacity 0.35s;
  &:hover, &:active, &.active {
    opacity: 1;
    color: var(--color-primary);
  }
}

footer {
  width: 100%;
  padding: 24px 0;
  display: block;
  p {
    color: var(--color-gray);
  }
}

.footer__container {
  @media (max-width: ${screen.tablet}) {
    padding: 0 15px;
  }
}
`

export default GlobalStyle
