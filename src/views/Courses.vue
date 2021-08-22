<template>
    <div class="mx-auto text-center w-2/5">
        <h1 class="text-3xl text-white text-mono py-6">Laravel Courses</h1>

        <div>
            <list-item v-for="item in items" :key="item.title" :item="item" />
        </div>
    </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import courseLinks from '@/data/courses.json'
import { sortByTitle } from '@/helpers'

export default {
    name: 'Courses',
    components: {
        ListItem
    },
    data() {
        return {
            items: sortByTitle(courseLinks)
        }
    }
}
</script>