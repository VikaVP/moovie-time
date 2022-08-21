<template>
    <div>
        <Header content="movies" />
        <div
            class="pt-125 bg-split-white-black lg:pl-121 lg:pr-121 md:pl-121 md:pr-121 xs:pl-2 xs:pr-2 sm:pl-2 sm:pr-2">
            <div class="flex">
                <div class="basis-50 ">
                    <div class="withBorder"></div>
                    <h5 class="text-white text-2xl font-semibold">Movies</h5>
                </div>
            </div>
            <div class="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row mt-10 gap-4">
                <div class="lg:basis-20 md:basis-20">
                    <Sortir />
                </div>
                <div>
                    <div class="grid lg:grid-cols-4 md:grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 gap-4">
                        <Card :title="movie.title" :rating="movie.vote_average"
                            :year="movie.release_date ? movie.release_date.split('-')[0] : '-'"
                            :overview="movie.overview" :genre="movie.genre" :poster="movie.poster_path"
                            section="discover" :id="movie.id" v-for="(movie, index) in loadMovies" :key="index" />
                    </div>
                    <div class="mt-4 mb-8 text-center">
                        <Button title="Load More" v-on:click.native="loadMore()" />
                    </div>
                </div>

            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Sortir from '../../components/Sortir/index.vue';
export default {
    data() {
        return {
            data: [],
            discoverData: []
        };
    },
    components: { Sortir },
    computed: {
        loadMovies() {
            return this.$store.getters.loadMovies
        }
    },
    methods: {
        async loadMore() {
            await this.$store.dispatch('filterMovies', { sorter: null, filter: null, next: true })
        }

    }
}
</script>

<style scoped>
.withBorder {
    width: 200px;
    position: relative;
    z-index: 1;
}

.withBorder:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
    height: 1px;
    width: 50%;
    border-top: 6px solid #E74C3C;
    border-radius: 10%;
}
</style>
