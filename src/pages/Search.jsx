// import React, { useState, useEffect } from "react";

// import { searchFilms } from "../Services/apicalls";

// const Search = () => {
//     const [movies, setMovies] = useState([]);
//     const [searchKey, setSearchKey] = useState("")

//     const searchMovies = (e) => {
//         e.preventDefault ()
//     }

// useEffect(()=>{

//     if(movies.length === 0){

//         searchFilms('alien')
//             .then(res =>

//                 setMovies(res.data.results)

//                 )
//             .catch(error => console.log(error));
//     } else {

//         console.log("here are my precious movies!", movies);
//     }

// },[movies]);

// return (
//     <div>
//         <form className='container' onSubmit={searchMovies}>

//         <input type="text" placeholder='Search your favorite movie' onChange={(e)=>setSearchKey(e.target.value)} />
//         <button>Search</button>

//         </form>
//     </div>
// )
// }

export default function Search() {
  return <h1>Search page</h1>;
}
