import { createRouter, createWebHistory } from 'vue-router';
import PokemonListView from '../views/PokemonListView.vue';
import PokemonDetailsView from '@/views/PokemonDetailsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonListView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon-details',
      props: true,
      component: PokemonDetailsView,
    },
  ],
});

export default router;
