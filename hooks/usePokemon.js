import { useContext } from "react";
import { PokemonsContext } from "../components/contexts/PokeContext";

const usePokemons = () => {
  const [state, setState] = useContext(PokemonsContext);

  return {
    PokemonList: state,
    setPokemonList: setState,
  };
};

export default usePokemons;