import styled from "styled-components"

const PageNavList = styled.ul`
  padding-left: 0;
  flex: 0 0 70%;
  width: 70%;

  @media (max-width: 575px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 767px) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 30px 5.555555%;
    background: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1024px) {
    ul {
      min-width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
`

export default PageNavList
