import axios from "axios";

export const getAllPokemons = () => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API_POKEMON_URL}pokemon?limit=999`)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getPokemonByUrl = (url) => {
  return new Promise((resolve, reject) => {
    !url && reject("URL Não existente ou em branco");
    return axios
      .get(url)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

// export const getFirstsPokemons = () => {
//   return new Promise((resolve, reject) => {
//     return axios
//       .get(process.env.API_POKEMON_URL)
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// };