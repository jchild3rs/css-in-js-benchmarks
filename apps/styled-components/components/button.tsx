import { DetailsHTMLAttributes } from "react";
import styled from "styled-components";

export type ButtonProps = DetailsHTMLAttributes<HTMLButtonElement>;

const Button = styled.button<ButtonProps>`
  color: blue;
  margin: 10px;
`;

export default Button;
