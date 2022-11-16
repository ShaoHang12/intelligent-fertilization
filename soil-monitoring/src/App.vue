<template>
  <div class="app">
     <router-view></router-view>
     <tabbar v-if="$route.meta.showTab"></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar.vue'
export default {
  components: { Tabbar },

}
</script>

<style>

</style>
