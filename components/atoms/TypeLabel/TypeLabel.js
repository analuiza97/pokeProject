import React from "react";
import { TypeWrapper } from "./style";

export const TypeLabel = ({ type }) => {
  return (
    <TypeWrapper color="pink" background="blue">
      {type || "Natural"}
    </TypeWrapper>
  );
};
