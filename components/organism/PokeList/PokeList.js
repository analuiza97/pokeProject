import React from "react";
import { PokeCard } from "../../molecules/PokeCard";
import { PokeListWrapper } from "./style";

const handlePokemonsArray = (PokemonsArray) => {
  if (PokemonsArray?.length > 0) {
    return PokemonsArray.map((pokemon) => {
      return <PokeCard pokemon={pokemon} />;
    });
  } else {
    return <h2>Carregando...</h2>;
  }
};

export const PokeList = ({ PokemonsArray }) => {
  return (
    <PokeListWrapper>{handlePokemonsArray(PokemonsArray)}</PokeListWrapper>
  );
};