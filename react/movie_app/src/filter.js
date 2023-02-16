import React ,{useState}from 'react'
import Fuse from 'fuse.js';

function Filter({movies,setMovies}) {
    const [titleFilter, setTitleFilter] = useState("");
    const [rateFilter, setRateFilter] = useState(0);

    const filteredItems = movies.filter(movie=> {
      const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
      const matchesRating = movie.rating >= rateFilter;
      return matchesTitle && matchesRating;
    });

    function filters(){
      setMovies(filteredItems())
    }


  {/*  function searchTitleInState(state,titleToSearch) {
      const options = {
        keys: ['titre'],
        includeScore: true,
        threshold: 0.4,
      };
      const fuse = new Fuse(state, options);
      const results = fuse.search(titleToSearch);
      return results.map(result => result.item);
    
    }
function filterwithtitle(){
  setMovies(searchTitleInState(movies,titleFilter))
}*/}
  return (
    <div>
<input className='border-black border-2 m-5 '
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input  className='border-black border-2 m-5'
        type="number"
        placeholder="Filter by rating"
        value={rateFilter}
        onChange={(e) => setRateFilter(e.target.value)}
      />
      <button onClick={filters} 
      
      className='border-black border-2 bg-pink-300 p-2 rounded-full'>Apply Filter</button>



    </div>
  )
}

export default Filter;