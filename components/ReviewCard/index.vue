<template>
    <div
        class="block p-6 bg-light-grey-2 rounded-lg border border-light-grey-2 shadow-light-grey-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex">
            <div class="flex basis-50 gap-3">
                <div>
                    <img class="w-10 h-10 rounded-full bg-light-grey-3"
                        :src="`https://image.tmdb.org/t/p//w300/${avatar}`" :alt="name" />
                </div>
                <div class="flex flex-col justify-center">
                    <div class="font-bold text-sm">
                        {{ name }}
                    </div>
                    <div class="text-xs text-dark-grey-3">
                        {{ date }}
                    </div>
                </div>
            </div>
            <div class="flex basis-50 justify-end">
                <div class="flex gap-2 bg-light-grey-4 pl-3 pr-3 pt-1 pb-1 rounded-md">
                    <svg aria-hidden="true" class="w-17px h-17px text-yellow-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Rating</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <h5 class="text-4xl font-semibold">{{ rating }}</h5>
                </div>
            </div>
        </div>
        <div class="flex mt-4 ">
            <p class="text-13"><i>{{ comment.slice(0, 300) }} ...</i></p>
        </div>
    </div>
</template>

<style>
</style>
<script>
export default {
    props: ['name', 'date', 'rating', 'comment', "avatar"],
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

