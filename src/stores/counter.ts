import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const drawer = ref(true)
  const links = [
        ['mdi-microsoft-windows', 'Dashboard'],
        ['mdi-account', 'Profile'],
        ['mdi-clipboard-list-outline', 'Product'],
        ['mdi-list-box', 'Order'],
        ['mdi-cog-outline', 'System Setting'],
      ]
      const chipprotifolist = [
        ['mdi-account', 'Profile'],
        ['mdi-key', 'Change Password'],
        ['mdi-cog', 'Setting'],
        ['mdi-logout', 'Loggout'],
      ]
    function changethevalue(){
      drawer.value = !drawer.value
    }
      return {links,drawer,changethevalue ,chipprotifolist}
})
