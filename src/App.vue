<template>
  <Header />
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
