import React, { useEffect, useState } from "react";
import { PokeCardWrapper, ImageHolder, CardTitle, TypesHolder } from "./style";
import { TypeLabel } from "../../atoms/TypeLabel";
import { getPokemonByUrl } from "../../../utils/api/PokemonApi";

export const PokeCard = ({ pokemon }) => {
  const [pokeData, setPokeData] = useState({ name: pokemon.name });

  useEffect(() => {
    getPokemonByUrl(pokemon.url).then((data) => setPokeData(data.data));
  }, []);

  return (
    <PokeCardWrapper>
      <ImageHolder>
        <img src={pokeData.sprites.front_default} alt={pokeData.name} />
      </ImageHolder>
      <h6>Nº {pokeData.id}</h6>
      <CardTitle>
        <h1>{pokeData.name}</h1>
        <TypesHolder>
          {pokeData.types.map((element) => {
            const { name } = element.type;
            return <TypeLabel type={name} background="red" color="qweqew" />;
          })}
        </TypesHolder>
      </CardTitle>
    </PokeCardWrapper>
  );
};