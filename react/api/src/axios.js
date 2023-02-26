import axios from "axios";
import { useEffect } from "react";

const Axios=()=>{

// useEffect(()=>{
//     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f0766916e0ddee100e96bc490147efca&language=en-US&page=1')
//     .then((response) => {
//         console.log(response.data.results);
//     setMovies(response.data.results);
    
//     }).catch((err) => {
//         console.log(err.message);
//        });
//     },[])
const requestOne = axios.get("https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");
const requestTwo = axios.get("https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt");
const requestThree = axios.get("https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");

axios
 .all([requestOne, requestTwo, requestThree])
 .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
     console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
   })
 )
 .catch(errors => {
   console.error(errors);
 });


// Make a request for a user with a given ID
axios.get('/user?ID=12345')
 .then(function (response) {
   // handle success
   console.log(response);
 })
 .catch(function (error) {
   // handle error
   console.log(error);
 })


 axios
 .post("/user", {
   firstName: "Fred",
   lastName: "Flintstone"
 })
 .then(function(response) {
   console.log(response);
 })
 .catch(function(error) {
   console.log(error);
 });


return (<div>


</div>);


}
export default Axios;