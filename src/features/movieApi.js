import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2FlM2IyZDhjMGQyNjY5ODBhZTU0MGE3NmY0YzU1NiIsInN1YiI6IjY0MjI1ODhhNTM0NjYxMDA3YTc5Y2FlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTfVR-n_38Vki6P4w1NiJO-YuaQCIKU5Dkhc5IbUehg';


export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3'
  }),
  endpoints: (builder) => ({


    nowPlaying: builder.query({
      query: () => ({
        url: '/movie/now_playing',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })
    }),






    movieBycategory: builder.query({
      query: (category) => ({
        url: `/movie/${category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })
    }),
    movievideo: builder.query({
      query: (id) => ({
        url: `/movie/${id}/videos`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })
    }),

    searchMovie: builder.query({
      query: (query) => ({
        url: '/search/movie',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },
        params: {
          query
        }
      })
    })
  })

});


export const { useMovieBycategoryQuery, useNowPlayingQuery, useMovievideoQuery, useSearchMovieQuery } = movieApi;