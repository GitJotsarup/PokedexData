<script setup>
import { ref, onMounted } from 'vue';
import PokemonCard from '@/components/PokemonCard.vue';
import PokemonService from '@/services/PokemonService.js';

const pokemons = ref(null);

onMounted(async () => {
  PokemonService.getPokemons()
  .then((response) => {
    pokemons.value = response.data
  })
  .catch((error) => {
    console.error(error);
  })
});
</script>

<template>
  <div class="pokemon-list">
    <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>