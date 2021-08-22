<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="cssClass" :fill="fill" :viewBox="viewBox" stroke="currentColor">
        <slot></slot>
    </svg>
</template>

<script>
export default {
    name: 'IconBase',
    props: {
        cssClass: String,
        viewBox: String,
        fill: {
            type: String,
            default: 'none'
        }
    }
}
</script>