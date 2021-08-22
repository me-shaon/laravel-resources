<template>
    <div class="mx-auto text-center w-2/5">
        <h1 class="text-3xl text-white text-mono py-6">Laravel official links</h1>

        <div>
            <simple-list v-for="item in items" :key="item.title" :item="item" />
        </div>
    </div>
</template>

<script>
import SimpleList from '@/components/SimpleList.vue'
import officialLinks from '@/data/official.json'

export default {
    name: 'Official',
    components: {
        SimpleList
    },
    data() {
        return {
            items: officialLinks
        }
    }
}
</script>