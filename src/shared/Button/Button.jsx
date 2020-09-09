import React from "react";
import { Button as ButtonStyled } from "./styled";

const Button = (props) => (
  <ButtonStyled {...props}>{props.children}</ButtonStyled>
);

export default Button;
