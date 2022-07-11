import React from "react"
import styled, { css } from "styled-components"

const ButtonOpenMenu = styled(({ onClick, className }) => (
  <button className={className} onClick={onClick}>
    <span />
  </button>
))`
  position: relative;
  z-index: 10;
  display: none;
  width: 22px;
  height: 20px;
  margin-left: auto;
  margin-right: 5.555555%;
  border: 0;
  background: none;
  transition: 0.35s;

  @media (max-width: 767px) {
    margin-right: 0;
    display: block;
    margin-right: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 22px;
    height: 2px;
    background: var(--color-primary);
    transition: 0.35s;
    ${props =>
      props.open &&
      css`
        top: 9px;
        width: 20px;
        transform: rotate(45deg);
      `}
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 22px;
    height: 2px;
    background: var(--color-primary);
    transition: 0.35s;
    ${props =>
      props.open &&
      css`
        bottom: 9px;
        width: 20px;
        transform: rotate(-45deg);
      `}
  }

  span {
    position: absolute;
    top: 50%;
    right: 2px;
    width: 14px;
    height: 2px;
    margin-top: -1px;
    background: var(--color-primary);
    ${props =>
      props.open &&
      css`
        display: none;
      `};
  }
`

export default ButtonOpenMenu
