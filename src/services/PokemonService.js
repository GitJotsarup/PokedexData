import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/GitJotsarup/PokedexData', // Change the base URL to the Pokémon API
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default {
  getPokemons() {
    return apiClient.get('/pokemon');
  },
  getPokemon(id) {
    return apiClient.get(`/pokemon/${id}`);
  },
};