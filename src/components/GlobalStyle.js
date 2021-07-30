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
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
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
  color: ${({ theme }) => theme.primary};
  opacity: 0.7;
  transition: background 0.35s, border 0.35s, opacity 0.35s;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.primary};
  }
}

footer {
  width: 100%;
  padding: 24px 0;
  display: block;
  p {
    color: ${({ theme }) => theme.gray};
  }
}

.footer__container {
  @media (max-width: ${screen.tablet}) {
    padding: 0 15px;
  }
}
`

export default GlobalStyle
