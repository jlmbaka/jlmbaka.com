import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

const Title = styled.h2`
  margin: 20px auto 0px;
  font-weight: 500;
  font-size: 1.5em;
  opacity: 1;
`

const Stack = styled.p`
  color: ${({ theme }) => theme.gray};
  margin-top: 4px;
  opacity: 1 !important;
`

const Card = ({ to, image, title, subtitle }) => (
  <Link to={to}>
    <GatsbyImage image={image} alt={title} aspectRatio={16 / 9} />
    <Title>{title}</Title>
    {subtitle && <Stack>{subtitle}</Stack>}
  </Link>
)

export default Card
