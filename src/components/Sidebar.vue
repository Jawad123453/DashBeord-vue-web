<template>
  <v-navigation-drawer v-model="drawer">
     <v-img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
      <div class="text-center d-flex justify-center align-center flex-column h-100">
        <v-avatar
          class="mb-4 "
          color="grey-darken-1"
          size="64"
        >
        <v-img src="https://img.freepik.com/free-photo/young-man-with-beard-round-glasses_273609-5885.jpg" cover></v-img>
      </v-avatar>

        <div class="text-white">Vuetify Admite Pinal</div>
      </div>
     </v-img>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia';

const store=useCounterStore()

const { drawer } = storeToRefs(store) 
const links = store.links
</script>

<style scoped>

</style>