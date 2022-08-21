<template>
    <div class="h-364px flex items-center justify-center" v-if="section === 'carousel'">
        <div class="bg-center bg-cover h-364px w-243px "
            :style="`background-image: url(${poster ? `https://image.tmdb.org/t/p//w300/${poster}` : 'https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg'});`">
        </div>
        <div class="pt-4 pb-4 w-270px">
            <div class="h-324px bg-black pl-4 pr-4 pb-4 pt-5">
                <div class="flex gap-2 items-center">
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Rating</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <h5 class="text-white text-17 font-bold">{{ rating }}</h5>
                </div>
                <div>
                    <h1 class="text-white font-medium text-28">{{ title }}</h1>
                </div>
                <div class="flex gap-2 items-center text-white">
                    {{ year }} <span class="w-1.5 h-1.5 bg-white border-2 border-white rounded-full"></span> {{ genre }}
                </div>
                <div class="mt-2">
                    <p class="text-white font-medium text-sm leading-18">
                        {{ overview.slice(0, 200) }} ...
                    </p>
                </div>
            </div>

        </div>
    </div>
    <div v-else class="max-w-sm bg-transparent border-none">
        <a href="#" class="relative" v-for="i in 1" @mouseover="showByIndex = i" @mouseout="showByIndex = null">
            <img :src="poster ? `https://image.tmdb.org/t/p//w300/${poster}` : 'https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg'"
                :alt="title" />
            <div
                class="absolute top-0 right-0 bg-black-shadow text-grey-white text-lg font-bold text-center pt-1 pb-1 pl-3 pr-3">
                {{ rating }}
            </div>
            <div v-show="showByIndex === 1"
                class="absolute z-30 shadow-thin-white bg-black-grey-2 top-0 flex flex-col gap-6 items-center justify-center w-full h-full text-white">
                <div class="flex gap-2 items-center">
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Rating</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <h5 class="text-white text-2xl font-bold">{{ rating }}</h5>
                </div>
                <div class="text-lg">{{ genre }}</div>
                <div>
                    <NuxtLink :to="`/detail/${id}`">
                        <Button title="VIEW" />
                    </NuxtLink>
                </div>
            </div>
        </a>
        <div class="pt-3 pr-3 pb-3">
            <p class="text-grey-white font-semibold text-base">{{ title }}</p>
            <p class="mb-3 text-grey-white font-normal text-sm">{{ year }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: ['title', 'img', 'section', 'year', 'genre', 'rating', 'overview', 'poster', 'id'],
    data() {
        return {
            showByIndex: null
        }
    }
}
</script>