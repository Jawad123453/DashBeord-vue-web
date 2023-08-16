<template>
  <v-app id="inspire">
    <Sidebar />
    <v-main>
      <Header />
      <v-container
        class="py-8 px-6"
        fluid
      >
      <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import { RouterView } from 'vue-router'
  
</script>

<style>
body{
  font-family: 'Montserrat', sans-serif;
}
/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

</style>
