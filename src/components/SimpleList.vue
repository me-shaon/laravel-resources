<template>
    <div class="shadow-2xl hover:shadow-none col-span-1 bg-white rounded-lg py-2 mb-2 mx-auto">
        <a :href="item.link" target="_blank" class="text-base text-mono my-2 block text-center text-gray-600 hover:text-gray-800 sm:text-xl">
            {{ item.title}}
        </a>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>