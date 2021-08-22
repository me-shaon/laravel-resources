<template>
  <div>
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    <li v-for="category in categories" :key="category.name" class="shadow-2xl hover:shadow-inner cursor-pointer col-span-1 flex flex-col text-center bg-white rounded-lg divide-y divide-gray-200">
      <router-link :to="category.link">
      <div class="flex-1 flex flex-col p-8 text-center">
        <icon-base :css-class="category.css || 'h-24 w-24'" :view-box="category.viewBox || '0 0 24 24'">
          <component v-bind:is="`icon-${category.icon}`"></component>
        </icon-base>
        <h3 class="mt-6 text-gray-900 text-sm font-mono font-medium">{{ category.title }}</h3>
      </div>
      </router-link>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      categories: [
        {
          title: 'Official',
          icon: 'laravel',
          css: 'h-24 w-16',
          viewBox: '0 0 50 50',
          link: 'official'
        },
        {
          title: 'Books',
          icon: 'book',
          link: 'books'
        },
        {
          title: 'Courses',
          icon: 'academic-cap',
          link: 'courses'
        },
        {
          title: 'Blogs',
          icon: 'pencil',
          link: 'blogs'
        },
        {
          title: 'People',
          icon: 'user-group',
          link: ''
        }
      ]
    }
  }
}
</script>
