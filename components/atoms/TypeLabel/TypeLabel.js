import React from "react";
import { TypeWrapper } from "./style";

export const TypeLabel = ({ props }) => {
  return
    <TypeWrapper {...props}>{props.type || "Natural"}
    </TypeWrapper>
};
