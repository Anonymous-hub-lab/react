import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2FkMmVlYTc1OTllYWRlNTQ1NzcyZGRiMjg2ZDM1MCIsInN1YiI6IjY0OWE0Nzk4MGU1YWJhMDBhY2YxZTAyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nF_0iS6h7-QaX2slD6Pswre6F7N4pPgKfRPGPROqGac';


export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
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
      query: () => ({
        url: '/moviepopular',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })
    })

  })

});

export const { useMovieBycategoryQuery, useNowPlayingQuery } = movieApi;