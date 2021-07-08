import styled from "styled-components"

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  color: white;
  background-color: #222020;
  border: 2px solid #222020;
  border-radius: 0;
  opacity: 1;
  svg {
    margin-left: 1rem;
  }

  path {
    color: white;
  }

  &:hover {
    color: #222020;
    background-color: white;
    border: 2px solid #222020;
    path {
      color: #222020;
    }
  }
`

export default Button
