<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="{ name: 'pokemon-details', params: { id: pokemon.id } }">
    <div class="pokemon-card">
      <img :src="pokemon.image" alt="Pokemon Image" />
      <h2>{{ pokemon.name }}</h2>
      <span>Type 1: {{ pokemon.type1 }}, Type 2: {{ pokemon.type2 }}</span>
      <p>{{ pokemon.evolution }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.pokemon-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 10px solid #ffd700;
  background-color: #7f839b;
  margin-bottom: 18px;
  border-radius: 15px;
}

.pokemon-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>