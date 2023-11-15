<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <h1 class="title">Pokédex App</h1>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
#layout {
  font-family: 'Avenir', 'Arial', 'Helvetica', sans-serif;
  text-align: center;
  color: #ffffff;
  background-color: rgb(29, 33, 73);
}

header {
  background-color: #e8491d;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin: 0;
  font-size: 24px;
  color: #fff;
}

nav {
  display: flex;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s ease;
}

nav a.router-link-exact-active {
  color: #ffd700;
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.card {
  width: 45%;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: scale(1.05);
}
</style>
