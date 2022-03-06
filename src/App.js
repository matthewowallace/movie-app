import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//998c724c

const API_URL = 'http://www.omdbapi.com?apikey=998c724c';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
      
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  
  useEffect(() => {

    searchMovies('Spiderman');

  }, []);



  return (
    <div className="App">
        <h1>RealBootleg Movies</h1>
        <div className='search'>
           <input 
              placeholder='Search...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
           />

           <img
              src={SearchIcon}
              alt= "search"
              onClick={() => searchMovies(searchTerm)}
           />
        </div>

        {
          movies?.length > 0 
          ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard  movie={movie}/>
              ))}
            </div>
           
          ) : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
        }
     </div>
  );
}

export default App;
