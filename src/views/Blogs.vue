<template>
    <div class="mx-auto text-center w-2/5">
        <h1 class="text-3xl text-white text-mono py-6">Laravel Blogs</h1>

        <div>
            <list-item v-for="item in items" :key="item.title" :item="item" />
        </div>
    </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import blogLinks from '@/data/blogs.json'
import { sortByTitle } from '@/helpers'

export default {
    name: 'Blogs',
    components: {
        ListItem
    },
    data() {
        return {
            items: sortByTitle(blogLinks)
        }
    }
}
</script>