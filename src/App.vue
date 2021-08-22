<template>
  <Header />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
   -->
  <div class="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
