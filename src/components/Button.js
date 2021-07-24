import styled from "styled-components"

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 0;
  opacity: 1;
  
  svg {
    margin-left: 1rem;
  }

  path {
    color: ${({ theme }) => theme.secondary};
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
    border: 2px solid ${({ theme }) => theme.primary};
    path {
      color: ${({ theme }) => theme.primary};
    }
  }
`

export default Button
