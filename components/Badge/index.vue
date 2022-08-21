<template>
    <div
        :class="`${active ? 'bg-red-600' : 'bg-almost-black-2'}  text-white pt-2 pb-2 pl-4 pr-4 rounded-full cursor-pointer`">
        {{ title }}
    </div>
</template>

<script>

export default {
    props: ['title', 'active'],
}
</script>