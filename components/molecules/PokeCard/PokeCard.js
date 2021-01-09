import React from "react";
import { PokeCardWrapper, ImageHolder, CardTitle, TypesHolder } from "./style";
import { TypeLabel } from "../../atoms/TypeLabel";

export const PokeCard = () => {
  return (
    <PokeCardWrapper>
      <ImageHolder>
        <img src="" alt="" />{" "}
      </ImageHolder>
      <h6>N° 003</h6>
      <CardTitle>
        <h1>Venossauro</h1>
        <TypesHolder>
          <TypeLabel/>
          <TypeLabel/>
        </TypesHolder>
      </CardTitle>
    </PokeCardWrapper>
  );
};
