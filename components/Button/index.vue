<template>
    <button type="button" class="bg-light-red text-white pt-1 pb-1 pl-8 pr-8 rounded-full">
        {{ title }}
    </button>
</template>

<script>

export default {
    props: ['title'],
}
</script>