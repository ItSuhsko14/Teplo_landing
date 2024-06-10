// Button.js
import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

// Базовий стиль кнопки
const ButtonBase = styled(Link)`
  width: 191px;
  height: 36px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  transition: all 0.5s ease;
  text-decoration: none;
  cursor: pointer;
  outline: none;

  /* Прибираємо стандартне виділення */
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${(props) =>
    props.variant === "filled" &&
    css`
      border: 0px solid white;
      background: hsl(210, 79%, 22%);
      color: white;

      &:active {
        border-image-source: linear-gradient(87deg, #3076be 1.5%, #011121 99.52%);
        background: linear-gradient(275.82deg, #3177be 7.7%, #011121 72.63%);
      }
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      border: 1px solid hsl(210, 79%, 22%);
      background: white;
      color: hsl(210, 79%, 22%);

      &:active {
        border: 2px solid hsl(210, 79%, 22%);
        border-image-source: linear-gradient(275.82deg, #3177be 7.7%, #011121 72.63%);
        color: linear-gradient(275.82deg, #3177be 7.7%, #011121 72.63%);
      }
    `}
`;

const Button = ({ to, children, variant }) => (
  <ButtonBase to={to} variant={variant}>
    {children}
  </ButtonBase>
);

export default Button;
