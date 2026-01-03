import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com',
            prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key','623c910711msh6c5c7d7cac6a9a7p14e8cdjsn4d25ef026b9b');
            return headers;
            },
        }),
        endpoints:(builder) => ({
            getTopCharts: builder.query({query: () => 'v1/charts/world'}),
            getSongByGenre: builder.query({ query: (genre ) => `v1/charts/genre-world?genre_code=${genre}` }),
            getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
            getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
            getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
            getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
            getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  }),      
});

    export const {
        useGetTopChartsQuery,
        useGetSongByGenreQuery,
        useGetSongDetailsQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongRelatedQuery,
        useGetSongsBySearchQuery,
        } = shazamCoreApi
