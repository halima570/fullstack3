import React ,{useState,useEffect}from 'react'
import Moviecart from './moviecart';
import axios from 'axios';

const Movielist = ({movies}) => {
   
    return (
      <div className='flex overflow-x-scroll snap-x snap-proximity'>
        {movies.map(movie => (
          <div className="h-screen w-screen snap-start" >
          <Moviecart
            title={movie.title}
            overview={movie.overview}
            backdrop_path={movie.backdrop_path}
            vote_average ={movie.vote_average}
          /></div>
        ))}
      </div>
    );
  }

export default Movielist;