<template>
    <div>
        <Header content="detail" />
        <div class="bg-center bg-cover pt-12 bg-split-white-black shadow-inner-black lg:h-350px md:h-350px xs:h-auto sm:h-auto flex"
            :style="`background-image: url(${data.backdrop_path ? `https://image.tmdb.org/t/p//w300/${data.backdrop_path}` : 'https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg'}); `">
            <div class="self-end w-full">
                <div class="flex lg:pl-121 md:pl-121 xs:pl-2 sm:pl-2">
                    <div class="">
                        <img :src="data.poster_path ? `https://image.tmdb.org/t/p//w300/${data.poster_path}` : 'https://www.instandngs4p.eu/wp-content/themes/fox/images/placeholder.jpg'"
                            class="lg:h-330px lg:w-220px md:h-330px md:w-220px relative bottom-minus-60" />
                    </div>
                    <div class="self-end p-33">
                        <p class="font-medium lg:text-lg md:text-lg xs:text-sm sm:text-sm text-white ">{{
                                data.release_date ?
                                    data.release_date.split('-')[0]
                                    : '-'
                        }}</p>
                        <h1 class="font-semibold lg:text-4xl md:text-4xl xs:text-md md:text-md text-white ">{{
                                data.title
                        }}</h1>
                        <p class="font-medium text-sm text-white ">{{ data.genre_name ? data.genre_name : '-'
                        }}</p>
                    </div>
                </div>
                <div class="flex pt-6 pr-6 pb-6 lg:pl-121 md:pl-121 xs:pl-2 sm:pl-2 bg-black-shadow-2">
                    <div class="w-220px">
                    </div>
                    <div class="flex lg:flex-row md:flex-row xs:flex-col sm:flex-col gap-3">
                        <div class="flex gap-3 items-center">
                            <div class="flex gap-3 items-center pl-33">
                                <svg aria-hidden="true" class="w-8 h-8 text-yellow-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Rating</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <h5 class="text-white text-4xl font-semibold">{{ data.vote_average }}</h5>
                            </div>
                            <div class="flex flex-col">
                                <p class="font-medium text-xs text-semi-white">USER SCORE</p>
                                <p class="font-medium text-XS text-white ">{{ data.vote_count }} VOTES</p>
                            </div>
                        </div>
                        <div class="flex flex-col border-l border-semi-white pl-4">
                            <p class="font-medium text-xs text-semi-white">STATUS</p>
                            <p class="font-medium text-XS text-white ">{{ data.status }}</p>
                        </div>
                        <div class="flex flex-col border-l border-semi-white pl-4">
                            <p class="font-medium text-xs text-semi-white">LANGUAGE</p>
                            <p class="font-medium text-XS text-white ">
                                {{
                                        data.spoken_languages[0].english_name
                                }}
                            </p>
                        </div>
                        <div class="flex flex-col border-l border-semi-white pl-4">
                            <p class="font-medium text-xs text-semi-white">BUDGET</p>
                            <p class="font-medium text-XS text-white ">$ {{ data.budget || '0' }}</p>
                        </div>
                        <div class="flex flex-col border-l border-semi-white pl-4">
                            <p class="font-medium text-xs text-semi-white">PRODUCTION</p>
                            <p class="font-medium text-XS text-white ">
                                {{
                                        data.production_companies.length > 1 ? data.production_companies[0].name : '-'
                                }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex pt-6 pr-6 pb-6 lg:pl-121 md:pl-121 xs:pl-2 sm:pl-2 xs:mt-14 lg:mt-0 md:mt-0">
            <div class="lg:w-220px md:w-220px lg:ml-33 md:ml-33">
            </div>
            <div class="flex flex-col gap-3 pl-2">
                <P class="text-sm font-semibold text-light-red">
                    OVERVIEW
                </P>
                <p class="lg:w-526px md:w-526px xs:w-full sm:w-full text-sm">
                    {{ data.overview }}
                </p>
            </div>
        </div>
        <div class="flex flex-col gap-5 pt-6 pb-6 lg:pl-121 md:pl-121 xs:pl-4 sm:pl-4 mt-3 pr-121">
            <div class="flex flex-col gap-3 ">
                <P class="text-sm font-semibold text-light-red">
                    REVIEWS
                </P>
            </div>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-5"
                v-if="review && review.length > 1">
                <div v-for="(rv, index) in review" :key="index">
                    <ReviewCard :name="rv.author" :date="rv.updated_at" :rating="rv.author_details.rating"
                        :avatar="rv.author_details.avatar_path" :comment="rv.content" />
                </div>
            </div>
        </div>
        <div
            class="flex flex-col gap-5 pt-12 pb-8 lg:pl-121 md:pl-121 xs:pl-2 sm:pl-2 mt-5 lg:pr-121 md:pr-121 xs:pr-4 sm:pr-4 bg-almost-black-2">
            <div class="flex flex-col gap-3 ">
                <P class="text-sm font-semibold text-white">
                    RECOMENDATION MOVIES
                </P>
            </div>
            <div>
                <div class="grid lg:grid-cols-5 md:grid-cols-5 xs:grid-cols-2 sm:grid-cols-2 gap-4">
                    <Card :title="rd.title" :rating="rd.vote_average"
                        :year="rd.release_date ? rd.release_date.split('-')[0] : '-'" :overview="rd.overview"
                        :genre="rd.genre" :poster="rd.poster_path" :id="rd.id" section="recomendation"
                        v-for="(rd, index) in recomendationData" :key="index" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Sortir from '../../../components/Sortir/index.vue';
import ReviewCard from '../../../components/ReviewCard/index.vue';
export default {
    data() {
        return {
            data: {
                adult: false,
                backdrop_path: '/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg',
                budget: 0,
                id: 610150,
                imdb_id: 'tt14614892',
                original_language: 'ja',
                original_title: 'ドラゴンボール超：スーパーヒーロー',
                overview: 'The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.',
                popularity: 6186.387,
                poster_path: '/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg',
                production_companies: [
                    {
                        id: 2918,
                        logo_path: '/gyEWUBWwqrm3H5T2hkERD9LxpOq.png',
                        name: 'Shueisha',
                        origin_country: 'JP'
                    },
                ],
                release_date: '2022-06-11',
                revenue: 17030000,
                spoken_languages: [{ english_name: 'Japanese', iso_639_1: 'ja', name: '日本語' }],
                status: 'Released',
                title: 'Dragon Ball Super: Super Hero',
                video: false,
                vote_average: 7.509,
                vote_count: 112,
                genre_name: 'Animation, Science Fiction, and Action '
            },
            recomendationData: [{
                adult: false,
                backdrop_path: '/3myU9OTSvAXxFVYBDUDs9zDFF4P.jpg',
                id: 629015,
                title: 'Shut In',
                original_language: 'en',
                original_title: 'Shut In',
                overview: 'A young single mother is held captive along with her two children by a violent ex and must plot their escape before it’s too late.',
                poster_path: '/b5ug4LyLQFeR6azAJyIPBQz5ur9.jpg',
                media_type: 'movie',
                genre_ids: [27, 53],
                popularity: 885.058,
                release_date: '2022-03-24',
                video: false,
                vote_average: 7.205,
                vote_count: 183,
                genre: 'Horror'
            },],
            review: [
            ]
        };
    },
    components: { Sortir, ReviewCard },
    mounted() {
    },
    async fetch() {
        await this.$store.dispatch('getSingleMovie', this.$route.params.id)
        await this.$store.dispatch('getReviewMovie', this.$route.params.id)
        await this.$store.dispatch('getRecommendationsMovies', this.$route.params.id)
        this.data = await this.$store.state.movie
        this.review = await this.$store.state.review
        this.recomendationData = await this.$store.state.recommendationsMovies
    }
}
</script>

<style scoped>
</style>
