<template>
    <div class="mx-auto text-center w-4/5">
        <h1 class="text-3xl text-white text-mono py-6">People to follow</h1>

        <div>
            <div v-for="item in items" :key="item.title" class="divide-y divide-gray-200 shadow-2xl col-span-1 bg-white rounded-lg py-2 mb-2 mx-auto">
                <div class="mb-6">
                    <h3 target="_blank" class="text-xl text-mono my-2 block text-center text-gray-800">
                        {{ item.title}}
                    </h3>
                    <p class="mt-1 text-gray-500 text-sm">{{ item.known_for }}</p>
                </div>
                <div class="-mt-px flex divide-x divide-gray-200">
                    <div v-for="social in item.links" :key=social.name class="w-0 flex-1 flex">
                        <a :href="social.link" target="_blank" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-indigo-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                            <span class="ml-3">{{ social.name }}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div>
        </div>
        </div>
    </div>
</template>

<script>
import peopleList from '@/data/people.json'
import { sortByTitle } from '@/helpers'

export default {
    name: 'People',
    data() {
        return {
            items: sortByTitle(peopleList)
        }
    }
}
</script>