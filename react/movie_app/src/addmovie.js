import React,{useState} from 'react'




function Addmovie({movies,setMovies}) {
  const [title, setTitle] = useState("");
  const [vote_average, seVote_average] = useState(0);
  const [ overview, setOverview] = useState("");
  const [backdrop_path, setBackdrop_path] = useState("");


function adding(){
  const newMovie = {
      title: 'title',
      overview:'overview',
      backdrop_path: 'backdrop_path',
      vote_average: vote_average,
    };
  setMovies([...movies,newMovie]);


setBackdrop_path('');
setOverview('');
setTitle('');
seVote_average(0)
}

  return (
<div className='border-2 border-yellow-500 bg-yellow-100 p-[30px] m-5'>
    <p className='text-3xl font-bold mb-4'>if you want to add new movie you have to write it's information below:</p>
    <form className=''>
  <label for="title" className='text-xl font-bold text-rose-900'>Title:</label>
  <input type="text" id="title" name="title" className='m-7' onChange={(e)=>setTitle(e.toggle.value)}/>

  <label for="description" className='text-xl font-bold text-rose-900' >Description:</label>
  <textarea id="description" name="description"  onChange={(e)=>setOverview(e.toggle.value)}></textarea>

  <label for="posterURL" className='text-xl font-bold text-rose-900'>image URL:</label>
  <input type="text" id="posterURL" name="posterURL"  onChange={(e)=>setBackdrop_path(e.toggle.value)} />

  <label for="rating" className='text-xl font-bold text-rose-900'>Rating:</label>
  <input type="number" id="rating" name="rating"  onChange={(e)=>seVote_average(e.toggle.value)}/>

  <button   
  onClick={adding}
  
  type="submit" className='text-xl font-bold bg-rose-900 text-yellow-100 p-3 rounded-full mt-5 ml-[200px] '>Add movie</button>
</form>
</div>
)
}

export default Addmovie;