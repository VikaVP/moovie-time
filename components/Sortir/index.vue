<template>
    <div class="lg:w-60 md:w-60 xs:w-full sm:w-full pt-5 pb-5 rounded-md bg-almost-black-3">
        <div class=" text-grey-white text-base pr-5 pl-5">Sort Result By</div>
        <div class="border-b border-semi-white mt-3 mb-3"></div>
        <div class=" text-grey-white text-base pr-5 pl-5">
            <select id="sorted" class="bg-dark-grey  text-grey-white text-sm rounded-sm block w-full p-2.5 "
                @change="onChange($event)" v-model="key">
                <option selected value="popularity.asc">Popularity Ascending</option>
                <option value="popularity.desc">Popularity Descending</option>
                <option value="primary_release_date.asc">Released Date Ascending</option>
                <option value="primary_release_date.desc">Released Date Descending</option>
                <option value="vote_average.asc">Rating Ascending</option>
                <option value="vote_average.desc">Rating Descending</option>
            </select>
        </div>
        <div class="border-b border-semi-white mt-3 mb-3"></div>
        <div class=" text-grey-white text-base pr-5 pl-5">Genres</div>
        <div class="border-b border-semi-white mt-3 mb-3"></div>
        <div class="pr-5 pl-5">
            <div class="flex mt-2 mb-2" v-for="(checkbox, index) in data" :key="index">
                <label :for="checkbox.value" class="text-sm font-medium text-grey-white flex-1">{{
                        checkbox.label
                }}</label>
                <div class="flex-1 text-right">
                    <input :id="checkbox.value" type="checkbox" :value="checkbox.value" :checked="checkbox.checked"
                        @change="check($event)"
                        class="w-4 h-4 text-orange-500 bg-dark-grey rounded border-dark-grey focus:ring-orange-500">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>
<script>
export default {
    data() {
        return {
            data: [
                { label: 'Action', value: 'Action', checked: false },
                { label: 'Adventure', value: 'Adventure', checked: false },
                { label: 'Animation', value: 'Animation', checked: false },
                { label: 'Comedy', value: 'Comedy', checked: false },
                { label: 'Crime', value: 'Crime', checked: false },
                { label: 'Documentary', value: 'Documentary', checked: false },
                { label: 'Drama', value: 'Drama', checked: false },
                { label: 'Family', value: 'Family', checked: false },
                { label: 'Fantasy', value: 'Fantasy', checked: false },
                { label: 'History', value: 'History', checked: false },
                { label: 'Horror', value: 'Horror', checked: false },
            ],
            key: "popularity.desc"
        }
    },
    methods: {
        async onChange(event) {
            this.key = event.target.value
            await this.$store.dispatch('filterMovies', { sorter: this.key, filter: null, next: false })
        },
        async check(event) {
            this.data.map((dt) => { dt.value === event.target.value && (dt.checked = event.target.checked) })
            let filter = this.data.map((dt) => dt.checked && dt.value)
            await this.$store.dispatch('filterMovies', { sorter: this.key, filter, next: false })
        }
    }
}
</script>

