import React from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Pagedescription({}) {
    let { id } = useParams();
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=f0766916e0ddee100e96bc490147efca&language=en-US')
    .then((response) => {
        console.log(response.data);
    setMovie(response.data);
    
    }).catch((err) => {
        console.log(err.message);
       });
    },[])
const navegate=useNavigate();
const back=()=>{
navegate(-1);
}
  return (
    <div className='border-2 border-yellow-600 bg-yellow-100'>
<h1 className='text-center text-5xl text-purple-900'>description of {movie.title}</h1>


 <p className='text-center text-xl m-8'>{movie.overview}</p> 

<button onClick={back} className='p-7 bg-slate-400 rounded-t-full'> backup</button>
    </div>
  )
}

export default Pagedescription;