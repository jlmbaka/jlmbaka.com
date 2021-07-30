import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: ${({ theme }) => theme.primary};
    opacity: 1;
  }
`

export default SocialIcon
