// Button.js
import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

interface ButtonProps {
  to: string;
  variant: "filled" | "outlined";
  width?: string;
  children: React.ReactNode;
}

interface StyledButtonProps {
  variant: "filled" | "outlined";
  width?: string;
}

// Базовий стиль кнопки
const ButtonBase = styled(Link)<StyledButtonProps>`
  height: 48px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  transition: all 0.5s ease;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  padding: 12px;
  text-wrap: nowrap;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

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
      color: rgba(252, 252, 252, 1);

      &:hover,
      &:active,
      &:visited {
        color: rgba(252, 252, 252, 1);
      }

      &:active {
        border-image-source: linear-gradient(87deg, #3076be 1.5%, #011121 99.52%);
        background: linear-gradient(275.82deg, #3177be 7.7%, #011121 72.63%);
      }
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      border: 1px solid hsl(210, 79%, 22%);

      color: rgba(12, 56, 101, 1) !important;

      &:active {
        border: 2px solid hsl(210, 79%, 22%);
        border-image-source: linear-gradient(275.82deg, #3177be 7.7%, #011121 72.63%);
        color: linear-gradient(275.82deg, #3177be 7.7%, #011121 72.63%);
      }
    `}
`;

const Button: React.FC<ButtonProps> = ({ to, children, variant, width }) => (
  <ButtonBase to={to} variant={variant} width={width}>
    {children}
  </ButtonBase>
);
export default Button;
