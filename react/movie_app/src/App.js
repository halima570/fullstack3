import Moviecart from "./moviecart";
import Filter from "./filter";
import Movielist from "./movielist";
import Addmovie from "./addmovie";
import React ,{useEffect,useState} from "react";
import axios from "axios";

function App() {

  const [movies,setMovies]=useState([]);
  useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f0766916e0ddee100e96bc490147efca&language=en-US&page=1')
  .then((response) => {
      console.log(response.data.results);
  setMovies(response.data.results);
  
  }).catch((err) => {
      console.log(err.message);
     });
  },[])

  

  return (
    <div className="App">
<div>
  <h1 className="text-yellow-500 font-bold text-5xl text-center m-3">WELCOM TO MOVIES APP</h1>
</div>

 <Filter movies={movies} setMovies={setMovies} />
<Movielist movies={movies}/> 


<Addmovie movies={movies} setMovies={setMovies}  /> 

    </div> 
  );
}

export default App;
