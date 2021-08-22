<template>
    <div class="shadow col-span-1 flex flex-col bg-white rounded-lg divide-y divide-gray-200 py-12">
        <div class="text-lg mx-auto my-2">
            <h1 class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
            Built with
            </h1>
        </div>
        <div class="mt-6 mx-auto">
            <ul role="list" class="mt-10 text-center text-lg flex flex-col gap-3">
                <li v-for="credit in credits" :key="credit.title" class="text-gray-500 hover:text-gray-700">
                    <a :href="credit.link" target="_blank" v-text="credit.title"></a>
                </li>
            </ul>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Info',
    data() {
        return {
            credits: [
                {
                    title: 'VueJS',
                    link: 'https://v3.vuejs.org/'
                },
                {
                    title: 'TailwindCSS',
                    link: 'https://tailwindcss.com/'
                },
                {
                    title: 'HeroIcons',
                    link: 'https://heroicons.com/'
                }
            ]
        }
    }
}
</script>