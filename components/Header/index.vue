<template>
    <div :class="`fixed top-0 z-50 w-full h-66px flex items-center  ${content !== 'detail' ? 'bg-dark-grey' : 'bg-black-transparent'} gap-12 lg:pl-121 lg:pr-121 xs:pl-2 xs:pr-2 sm:pl-2 sm:pr-2`"
        id="nav">
        <img src="@/static/icon-mt.png" alt="MovieTime" class="cursor-pointer" @click="moveToHome()">
        <button
            class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none xs:flex xs:justify-end md:w-full xs:w-full md:flex md:justify-end"
            type="button" v-on:click="toggleNavbar()">
            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>

        </button>
        <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }"
            class="lg:hidden md:hidden items-center xs:mt-24 sm:mt-24 lg:mt-0 md:mt-0 bg-black relative p-4 "
            style="width: 800px; left: -50px;">
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
                <li class="nav-item">
                    <NuxtLink to="/lists">
                        <h4 class="text-grey-white text-sm">MOVIES</h4>
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/">
                        <h4 class="text-grey-white text-sm">TV SHOW</h4>
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/">
                        <h4 class="text-grey-white text-sm">LOGIN</h4>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <form class="w-full xs:hidden sm:hidden lg:block">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <img src="@/static/icon-movie.png" alt="Search Movie" class="w-5">
                </div>
                <input type="search" id="default-search"
                    class="block p-4 pl-11 w-full text-base text-grey-white bg-almost-black rounded-lg border border-almost-black placeholder-grey-white h-9"
                    placeholder="Find Movie" required v-on:keyup="autocompleteSearch($event)"
                    v-on:click="toggleSearch()">
                <button type="submit" class="bg-transparent absolute right-2.5 bottom-2.5 "><svg aria-hidden="true"
                        class="h-3 w-3 text-grey-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg></button>
                <!-- Dropdown search -->
                <div
                    :class="`${hideDropdownSearch ? 'hidden' : ''} z-10 w-full bg-almost-black rounded divide-y divide-gray-100 shadow dark:bg-gray-700 top-10 absolute`">
                    <ul class="py-1 text-sm text-white" aria-labelledby="dropdownDefault">
                        <li v-for="(sc, index) in search" :key="index">
                            <NuxtLink :to="`/detail/${sc.id}`">
                                <div class="block py-2 px-4 hover:bg-dark-grey-2 text-sm" v-html="sc.content">
                                </div>
                            </NuxtLink>
                        </li>

                    </ul>
                </div>
            </div>
        </form>
        <div class="flex w-max whitespace-nowrap gap-3 items-center justify-center xs:hidden sm:hidden lg:block"
            data-dropdown-toggle="dropdown" @click="toggleDropdown()">
            <div class="relative flex items-center justify-center cursor-pointer gap-3">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-grey-white transition duration-75"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                    </path>
                </svg>
                <h4 class="text-grey-white text-sm">CATEGORIES</h4>
            </div>
            <!-- Dropdown menu -->
            <div id="dropdown"
                :class="`${hideDropdown ? 'hidden' : ''} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 top-16 absolute`">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ACTION</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ADVENTURE</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ANIMATION</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">COMEDY</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CRIME</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">DOCUMENTARY</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">DRAMA</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FAMILY</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FANTASY</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">HISTORY</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">HORROR</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-max whitespace-nowrap xs:hidden sm:hidden lg:block">
            <NuxtLink to="/lists">
                <h4 class="text-grey-white text-sm">MOVIES</h4>
            </NuxtLink>
        </div>
        <div class="w-max whitespace-nowrap xs:hidden sm:hidden lg:block">
            <NuxtLink to="/">
                <h4 class="text-grey-white text-sm">TV SHOW</h4>
            </NuxtLink>
        </div>
        <div class="w-max whitespace-nowrap xs:hidden sm:hidden lg:block">
            <NuxtLink to="/">
                <h4 class="text-grey-white text-sm">LOGIN</h4>
            </NuxtLink>
        </div>
    </div>
</template>

<style>
</style>
<script>
export default {
    props: ['content'],
    data() {
        return {
            hideDropdown: true,
            message: null,
            debounce: null,
            showMenu: false
        }
    },
    methods: {
        moveToHome() {
            this.$router.push('/')
        },
        toggleDropdown() {
            this.hideDropdown = !this.hideDropdown
        },
        async toggleSearch() {
            await this.$store.commit('setDropdownSearch', (this.$store.state.search.length !== 0 ? !this.$store.state.hideDropdownSearch : false))
        },
        async autocompleteSearch(event) {
            this.message = null
            clearTimeout(this.debounce)
            this.debounce = setTimeout(async () => {
                this.typing = null
                this.message = event.target.value
                await this.$store.dispatch('searchMovie', event.target.value)
            }, 600)
        },
        toggleNavbar() {
            this.showMenu = !this.showMenu;
        }
    },
    mounted() {
        let content = this.content
        this.$nextTick(function () {
            window.addEventListener("scroll", function () {
                let navbar = document.getElementById("nav")
                let nav_classes = navbar.classList
                if (content === 'detail') {
                    if (document.documentElement.scrollTop >= 100) {
                        if (nav_classes.contains("bg-dark-grey") === false) {
                            nav_classes.toggle("bg-dark-grey")
                            nav_classes.toggle('bg-black-transparent')

                        }
                    }
                    else {
                        if (nav_classes.contains("bg-dark-grey") === true) {
                            nav_classes.toggle("bg-dark-grey")
                            nav_classes.toggle('bg-black-transparent')
                        }
                    }
                }
            })
        })
    },
    computed: {
        hideDropdownSearch() {
            return this.$store.getters.hideDropdownSearch
        },
        search() {
            return this.$store.getters.search
        }
    },
}
</script>

