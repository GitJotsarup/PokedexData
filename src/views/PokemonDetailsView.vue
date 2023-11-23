<script setup>
import { ref, onMounted, defineProps } from 'vue';
import PokemonService from '@/services/PokemonService.js';

const pokemonDetails = ref(null);

const props = defineProps({
    id: { required: true }
});

onMounted(async () => {
    try {
        const response = await PokemonService.getPokemon(props.id);
        pokemonDetails.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
  <div v-if="pokemonDetails">
    <h1>{{ pokemonDetails.name }}</h1>
    <p>Type 1: {{ pokemonDetails.type1 }} and Type 2: {{ pokemonDetails.type2 }}</p>
    <p>Japenese Name: {{ pokemonDetails.jname }}</p>
    <p>Evolution information: {{ pokemonDetails.evolution }}</p>
  </div>
</template>
