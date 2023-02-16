import React ,{useState}from 'react'

const Moviecart = ({ title, overview, backdrop_path, vote_average}) => {
    return (
      <div className=" border-2 bg-slate-400 border-pink-900 m-5 p-4 w-[180px]">
        <img src={'https://image.tmdb.org/t/p/w500'+backdrop_path} alt={title}  className='w-[170px] h-[170pxx] m-2'/>
        <div className="movie-details">
          <h2 className='font-bold text-black text-xl'>{title}</h2>
          <p className='text-xs text-gray-600'>{overview.split(' ').slice(0,17).join(' ')}</p>
          <p className='text-black text-xl'>Rating: <span className='text-yellow-500 text-4xl'>{vote_average}</span></p>
        </div>
      </div>
    );}
export default Moviecart;