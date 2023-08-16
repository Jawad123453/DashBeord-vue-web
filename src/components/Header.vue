<template>
  <v-app-bar color="white" scroll-behavior="elevate">
      <v-app-bar-nav-icon @click="store.changethevalue"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-col sm="6" cols="10" class="d-none d-sm-block">
        <v-form>
          <v-text-field
          density="compact"
          variant="solo"
          label="Search templates"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details 
          rounded/>
        </v-form>
      </v-col>
      <v-spacer></v-spacer>
      <div class="d-flex align-center justify-space-between mx-5 mr-10">
          <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <span v-bind="props" style="cursor: pointer;" class=" mr-10 text-h6">
          <v-badge offset-x="5" offset-y="5" color="red" content="3">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </span>
        </template>

        <v-list
        :items="items"
        item-props
        lines="three"
        width="250"
      >
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
      </v-menu>
      <v-menu
        v-model="menu"
        location="top start"
        origin="top start"
        transition="scale-transition"
      >
        <template v-slot:activator="{ props }">
          <v-chip
            pill
            v-bind="props"
            link
            class="pa-3"
          >
            <v-avatar start>
              <v-img src="https://img.freepik.com/free-photo/young-man-with-beard-round-glasses_273609-5885.jpg"></v-img>
            </v-avatar>
            John Leider
          </v-chip>
        </template>

        <v-card  width="250">
          <v-list bg-color="black">
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar image="https://img.freepik.com/free-photo/young-man-with-beard-round-glasses_273609-5885.jpg"></v-avatar>
              </template>

              <v-list-item-title>John Leider</v-list-item-title>

              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item
              v-for="[icon, text] in store.chipprotifolist"
              :key="icon"
              :prepend-icon="icon"
              link
            >
              <v-list-item-subtitle>{{ text }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </div>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { ref } from "vue";

const store=useCounterStore()

const menu=ref(false); 

const items= [
        { type: 'subheader', title: 'Today' },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
      ]
</script>

<style scoped>

</style>