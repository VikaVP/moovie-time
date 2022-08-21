<template>
    <VueSlickCarousel v-bind="settings">
        <div class="pr-2" v-for="(dt, index) in data" :key="index">
            <Card :title="dt.title" :rating="dt.vote_average"
                :year="dt.release_date ? dt.release_date.split('-')[0] : '-'" :overview="dt.overview" :genre="dt.genre"
                :poster="dt.poster_path" section="carousel" />
        </div>
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Card from '../Card/index.vue'

export default {
    components: { VueSlickCarousel, Card },
    props: ['data'],
    data() {
        return {
            settings: {
                arrows: false,
                dots: true,
                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 2,
                "slidesToScroll": 2,
                "touchThreshold": 5,
                centerMode: true,
                "lazyLoad": "ondemand",
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "infinite": true,
                            "dots": true,
                            arrows: false,
                        }
                    },
                    {
                        "breakpoint": 768,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2,
                            arrows: false,
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            arrows: false,
                        }
                    }
                ]
            },
        }
    },
    method: {
    },
}
</script>