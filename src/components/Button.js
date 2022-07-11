import styled from "styled-components"

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  color: var(--color-secondary);
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 0;
  opacity: 1;
  
  svg {
    margin-left: 1rem;
  }

  path {
    color: var(--color-secondary);
  }

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
    border: 2px solid var(--color-primary);
    path {
      color: var(--color-primary);
    }
  }
`

export default Button
