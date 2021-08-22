<template>
<header class="bg-white shadow-sm lg:static lg:overflow-y-visible">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8 py-5">
      <div class="flex md:absolute md:left-0 md:inset-y-0 lg:static col-span-2">
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/">
            <div class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Home</span>
                <icon-base css-class="h-6 w-6" view-box="0 0 24 24">
                  <icon-home />
                </icon-base>
            </div>
          </router-link>
        </div>
      </div>
      <div class="flex items-center justify-center col-span-8">
        <h2 class="text-xl font-bold font-serif">Laravel Resources</h2>
      </div>
      <div class="flex items-center justify-end col-span-2">
        <router-link to="/info">
          <div class="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500">
            <span class="sr-only">Learn more</span>
            <icon-base css-class="h-6 w-6" view-box="0 0 24 24">
              <icon-info />
            </icon-base>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</header>

</template>
<script>
export default {
  name: 'Header'
}
</script>
