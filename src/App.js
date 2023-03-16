// import './App.css';
// import {useState, useEffect} from 'react';
// import React from 'react';

// const Person = (props ) =>{
//   return (
//     <>
//     <h1>name: {props.Name} </h1>
//     <h2> last name : {props.Lastname}  </h2>
//     <h2> age: {props.age}  </h2>
//     </>
//   )
// }

// const Person2 = () =>{
//   return (
//     <>
//     <h1>name: frank </h1>
//     <h2> last name : jackson </h2>
//     <h2> age: 38 </h2>
//     </>
//   )
// }



// const App = () => {
//   const name = null;// 'john';
//   const [counter, setCounter] = useState(0);

// useEffect(()=>{
//   // alert('reload')
//   setCounter(( prevcount)=> prevcount = 100)
//   // above line updates every time variable in lower line [] changes 
// }, []);

//   return (
//     <div className="App">
//       <Person Name = 'alex' Lastname = 'ruso' age={8+2} />
//       <Person2/>

//     <h1>hello world, {2+2}</h1>
//     {name ? (
//       <>
//       <h1>{name}</h1>
//       </>
//     ):(
//       <>
//       <h1>test</h1>
//       <h2>there is no name </h2>
//       </>
//     )}
// {/* counter */}
// <button onClick={ ()=> setCounter(( prevcount)=> prevcount -1)}>-</button>
// <h1>{counter}</h1>
// <button onClick={ ()=> setCounter(( prevcount)=> prevcount +1)} >+</button>
// {/* counter */}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useState ,useEffect} from 'react';
import './App.css';
import MovieCard from './moviecard';
// import logo from './logo.svg';

const API_URL = ""

const App = () =>{
const [movies, setMovies ]= useState([]);
const [searchterm, setSearchterm] = useState('');
  const searchmovies = async (title)=>{
const response = await fetch (`${API_URL}&s=${title}`);
const data = await response.json(); 
setMovies(data.Search); }

// const movie1 = {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }

useEffect (()=>{
searchmovies('any'); 
},[]);

  return (
    <div ClassName= "app">
<h1>App</h1>

<div ClassName = "search">
       <input
       paceholder = "search for movies"
       value = {searchterm}
       onChange= {(e)=> setSearchterm(e.target.value)}
      />
      <button
      onClick={ () => searchmovies(searchterm)}
      >click</button>
</div>

{
  movies?.length>0
  ?(
<div ClassName = "countainer">
 { movies.map((movie) => (
  <div ClassName = "m">
 <MovieCard movie = {movie} />
 </div>
 )
 )}
</div>
  ):
  (
    <div className='empty'>
      <h2> no movies found </h2>
    </div>
  )
}

</div>
  );
}

export default App;