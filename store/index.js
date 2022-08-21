import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
    return new Vuex.Store({
        state: {
            movies: [],
            loaded: true,
            movie: [],
            genres: [],
            discoverMovies: [],
            review: [],
            recommendationsMovies: [],
            popularMovies: [],
            page: 1,
            urlFilter: null,
            hideDropdownSearch: true,
            search: []
        },
        mutations: {
            setMovies(state, movies) {
                state.movies = movies
            },
            setSearch(state, search) {
                state.search = search
            },
            setDropdownSearch(state, hideDropdownSearch) {
                state.hideDropdownSearch = hideDropdownSearch
            },
            setPage(state, page) {
                state.page = page
            },
            setUrlFilter(state, urlFilter) {
                state.urlFilter = urlFilter
            },
            setPopularMovies(state, popularMovies) {
                state.popularMovies = popularMovies
            },
            setReview(state, review) {
                state.review = review
            },
            setDiscoverMovies(state, discoverMovies) {
                state.discoverMovies = discoverMovies
            },
            setRecommendationsMovies(state, recommendationsMovies) {
                state.recommendationsMovies = recommendationsMovies
            },
            setGenres(state, genres) {
                state.genres = genres
            },
            loaded(state, load) {
                state.loaded = load
            },
            setMovie(state, movie) {
                state.movie = movie
            },
        },
        actions: {
            async nuxtServerInit(vuexContext, context) {
                await vuexContext.dispatch('getGenres')
                await vuexContext.dispatch('getPopularMovies')
                await vuexContext.dispatch('getDiscoverMovies')
            },
            async getPopularMovies(vuexContext) {
                vuexContext.commit('loaded', true)
                return await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1`
                ).then(response => {

                    let data = response.data.results
                    let genres = vuexContext.state.genres
                    let sliceData = data.slice(0, 5)
                    for (let j = 0; j < sliceData.length; j++) {
                        let flag = false
                        for (let i = 0; i < genres.length; i++) {
                            if (Number(genres[i].id) === Number(sliceData[j].genre_ids[0])) {
                                flag = true
                                sliceData[j].genre = genres[i].name
                            }
                            if (flag) {
                                break
                            }
                        }
                    }
                    vuexContext.commit('setPopularMovies', sliceData)
                    vuexContext.commit('loaded', false)
                }).catch(e => {
                    console.log(e);
                })
            },
            async getDiscoverMovies(vuexContext, sort) {
                vuexContext.commit('loaded', true)
                let sortBy = `sort_by=${sort || 'popularity.desc'}`
                return await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1&${sortBy}`
                ).then(response => {
                    let page = response.data.page
                    let data = response.data.results
                    let genres = vuexContext.state.genres
                    for (let j = 0; j < data.length; j++) {
                        let flag = false
                        for (let i = 0; i < genres.length; i++) {
                            if (Number(genres[i].id) === Number(data[j].genre_ids[0])) {
                                flag = true
                                data[j].genre = genres[i].name
                            }
                            if (flag) {
                                break
                            }
                        }
                    }
                    vuexContext.commit('setDiscoverMovies', data)
                    vuexContext.commit('setMovies', data)
                    vuexContext.commit('setPage', page)
                    vuexContext.commit('loaded', false)
                }).catch(e => {
                    console.log(e);
                })
            },
            async filterMovies(vuexContext, filtering) {
                vuexContext.commit('loaded', true)
                let sortBy = `sort_by=${filtering.sorter || 'popularity.desc'}`
                let filterGenres = 'with_genres='
                let genres = vuexContext.state.genres
                let page = vuexContext.state.page
                if (filtering.filter) {
                    for (let v = 0; v < filtering.filter.length; v++) {
                        let flag = false
                        for (let x = 0; x < genres.length; x++) {
                            if (genres[x].name === filtering.filter[v]) {
                                flag = true
                                filterGenres += (genres[x].id + ',')
                            }
                            if (flag) {
                                break
                            }
                        }
                    }
                }
                let url = `https://api.themoviedb.org/3/discover/movie?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=${vuexContext.state.page}&${sortBy}&${filterGenres}&page=${filtering.next ? (page + 1) : page}`
                vuexContext.commit('setUrlFilter', url)
                return await axios.get(
                    url
                ).then(response => {
                    let nowPage = response.data.page
                    let data = response.data.results
                    for (let j = 0; j < data.length; j++) {
                        let flag = false
                        for (let i = 0; i < genres.length; i++) {
                            if (Number(genres[i].id) === Number(data[j].genre_ids[0])) {
                                flag = true
                                data[j].genre = genres[i].name
                            }
                            if (flag) {
                                break
                            }
                        }
                    }
                    vuexContext.commit('setPage', nowPage)
                    vuexContext.commit('setMovies', filtering.next ? [...vuexContext.state.movies, ...data] : data)
                    vuexContext.commit('loaded', false)
                }).catch(e => {
                    console.log(e);
                })
            },
            async getRecommendationsMovies(vuexContext, id) {
                vuexContext.commit('loaded', true)
                return await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1`
                ).then(response => {
                    let data = response.data.results
                    let genres = vuexContext.state.genres
                    for (let j = 0; j < data.length; j++) {
                        let flag = false
                        for (let i = 0; i < genres.length; i++) {
                            if (Number(genres[i].id) === Number(data[j].genre_ids[0])) {
                                flag = true
                                data[j].genre = genres[i].name
                            }
                            if (flag) {
                                break
                            }
                        }
                    }

                    console.log(data, 'recom');
                    vuexContext.commit('setRecommendationsMovies', data)
                    vuexContext.commit('loaded', false)
                }).catch(e => {
                    console.log(e);
                })
            },
            async getSingleMovie(vuexContext, id) {
                vuexContext.commit('loaded', true)
                return await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1`
                ).then(response => {
                    let data = response.data
                    let genres = data.genres
                    let arrGenreName = ''
                    if (genres.length < 2) {
                        arrGenreName += genres[0].name
                    } else if (genres.length === 2) {
                        arrGenreName += `${genres[0].name} and ${genres[1].name}`
                    } else {
                        for (let i = 0; i < genres.length; i++) {
                            if (i !== genres.length - 1) {
                                arrGenreName += `${genres[i].name}, `
                            } else {
                                arrGenreName += `and ${genres[i].name} `
                            }
                        }
                    }
                    data.genre_name = arrGenreName

                    console.log(data, 'single');
                    vuexContext.commit('setMovie', data)
                    vuexContext.commit('loaded', false)
                }).catch(e => {
                    console.log(e);
                })
            },
            async getReviewMovie(vuexContext, id) {
                vuexContext.commit('loaded', true)
                return await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1`
                ).then(response => {
                    let data = response.data.results
                    if (response.data.results.length > 4) {
                        data = response.data.results.slice(0, 4)
                    }

                    console.log(data, 'rev');
                    vuexContext.commit('setReview', data)
                    vuexContext.commit('loaded', false)
                }).catch(e => {
                    console.log(e);
                })
            },
            async searchMovie(vuexContext, query) {
                vuexContext.commit('loaded', true)
                return await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&query=${query}`
                ).then(response => {
                    let data = response.data.results
                    if (data.length > 1) {
                        for (let i = 0; i < data.length; i++) {
                            const regex = new RegExp(query.split("").join("-?"), "i");
                            data[i].content = data[i].title.replace(regex, (match) => "<b>" + match + "</b>");
                        }
                    }

                    vuexContext.commit('setSearch', data.slice(0, 7))
                    vuexContext.commit('setDropdownSearch', false)
                    vuexContext.commit('loaded', false)
                }).catch(e => {
                    console.log(e);
                })
            },
            async getGenres(vuexContext) {
                return await axios.get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1`
                ).then(response => {
                    const data = response.data.genres
                    vuexContext.commit('setGenres', data)
                }).catch(e => {
                    console.log(e);
                })
            },
        },
        getters: {
            isloaded: state => {
                return state.loaded
            },
            loadMovies: state => {
                return state.movies
            },
            popularMovies: state => {
                return state.popularMovies
            },
            movie: state => {
                return state.movie
            },
            page: state => {
                return state.page
            },
            discoverMovies: state => {
                return state.discoverMovies
            },
            recommendationsMovies: state => {
                return state.recommendationsMovies
            },
            genres: state => {
                return state.genres
            },
            review: state => {
                return state.review
            },
            search: state => {
                return state.search
            },
            hideDropdownSearch: state => {
                return state.hideDropdownSearch
            }
        }
    })
}

export default createStore