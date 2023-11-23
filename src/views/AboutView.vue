<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
// import { collection, getDocs } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore"

import PokemonCard from '@/components/PokemonCard.vue';

// create an empty array
const pokemons = ref([])

async function getPokemons() {
  onSnapshot(collection(db, 'pokemons'), (querySnapshot) => {
  querySnapshot.forEach((doc) => {
      let pokemon = {
        "id": doc.id,
        "type1": doc.data().type1,
        "type2": doc.data().type2,
        "evolution": doc.data().evolution,
        "jname": doc.data().jname,
        "jotfav": doc.data().jotfav,
        "image": doc.data().image
      }
      // add the object to the array
        pokemons.value.push(pokemon)
  });
})
}

onMounted(async () => {
    console.log("Connecting to Firebase")
    await getPokemons()
})


</script>

<template>
  <div class="pokemons">
    <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
