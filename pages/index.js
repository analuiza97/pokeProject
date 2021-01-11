import React from "react";
import { PokeList } from "../components/organism/PokeList";
import usePokemon from "../hooks/usePokemon";

export default function index() {
  const { PokemonList } = usePokemon();

  return (
    <div>
      <PokeList PokemonsArray={PokemonList} />
    </div>
  );
}