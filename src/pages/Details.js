import React from 'react'
import { useMovievideoQuery } from '../features/movieApi';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useMovievideoQuery(id);



  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-24'>
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>

  }



  return (
    <div>


      <iframe width="560" height="315" className='mx-auto mt-12' src={`https://www.youtube.com/embed/${data.results[0]?.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Details
