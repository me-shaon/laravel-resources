<template>
    <div class="shadow-2xl hover:shadow-none col-span-1 bg-white rounded-lg py-2 mb-2 mx-auto">
        <a :href="item.link" target="_blank" class="text-lg text-mono my-2 block text-center text-gray-600 hover:text-gray-800">
            {{ item.title}}
        </a>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        item: Object
    }
}
</script>