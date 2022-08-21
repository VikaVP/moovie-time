<template>
  <div>
    <Header content="home" />
    <div class="pt-28 bg-almost-black-2 pb-16 lg:pl-12 lg:pr-12 md:pl-12 md:pr-12 xs:pl-2 xs:pr-2 sm:pl-2 sm:pr-2">
      <Carousel :data="popularMovies" />
    </div>
    <div class="pt-12 bg-split-white-black lg:pl-121 lg:pr-121 md:pl-121 md:pr-121 xs:pl-2 xs:pr-2 sm:pl-2 sm:pr-2">
      <div class="flex xs:flex-col sm:flex-col lg:flex-row md:flex-row">
        <div class="basis-50 ">
          <div class="withBorder"></div>
          <h5 class="text-white text-2xl font-semibold">Discover Movies</h5>
        </div>
        <div class="basis-50 flex lg:justify-end gap-3 xs:mt-4 sm:mt-4 lg:mt-0 md:mt-0">
          <Badge title="Popularity" :active="popularity" v-on:click.native="changeSortir('popularity.desc')" />
          <Badge title="Release Date" :active="date" v-on:click.native="changeSortir('primary_release_date.asc')" />
        </div>
      </div>
      <div class="grid lg:grid-cols-5 md:grid-cols-5 xs:grid-cols-2 sm:grid-cols-2 gap-4 mt-10">
        <Card :title="dm.title" :rating="dm.vote_average" :year="dm.release_date ? dm.release_date.split('-')[0] : '-'"
          :overview="dm.overview" :genre="dm.genre" :poster="dm.poster_path" section="discover" :id="dm.id"
          v-for="(dm, index) in discoverMovies" :key="index" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header/index.vue';
import Carousel from '../components/Carousel/index.vue';
import Card from '../components/Card/index.vue';
import Badge from '../components/Badge/index.vue';
export default {
  name: "IndexPage",
  components: { Header, Carousel, Badge, Card },
  data() {
    return {
      data: [],
      discoverData: [],
      popularity: true,
      date: false
    }
  },
  async mounted() {
  },
  computed: {
    popularMovies() {
      return this.$store.getters.popularMovies
    },
    discoverMovies() {
      return this.$store.getters.discoverMovies
    }
  },
  methods: {
    async changeSortir(val) {
      val === 'primary_release_date.asc' ? (this.date = true, this.popularity = false) : (this.date = false, this.popularity = true)
      await this.$store.dispatch('getDiscoverMovies', val)
    },
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
