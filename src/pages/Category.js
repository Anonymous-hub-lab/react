import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useMovieBycategoryQuery, useMovievideoQuery } from '../features/movieApi';

const Category = () => {
  const { category } = useParams();

  const { data, isLoading, isError, error } = useMovieBycategoryQuery(category);

  const nav = useNavigate();

  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-24'>
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>

  }


  return (
    <div className='grid grid-cols-4 gap-5 p-6 sm:grid-cols-2 m-auto'>
      {data.results.map((movie) => {
        return <div onClick={() => nav(`/movie/detail/${movie.id}`)} key={movie.id} className='cursor-pointer hover:scale-105 transition-all shadow-lg'>
          <img className='h-[400px] w-full' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="" />
          <div className='p-3 space-y-2'>
            <h1 className='font-bold'>{movie.title}</h1>
            <p>{movie.overview.substring(0, 50) + '...'}</p>
          </div>

        </div>

      })}
    </div>
  )
}

export default Category
