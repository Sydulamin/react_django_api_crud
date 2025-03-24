import { useEffect, useState } from 'react';
import Card from './Components/card';
import axios from 'axios';
import { fetchMovies } from './services/Api_service';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('avenger');

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/movies/');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [movies]);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="mb-5 flex justify-center">
        <input 
          type="text" 
          placeholder="Search for a movie..." 
          className="p-2 border rounded w-1/2" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default App;
