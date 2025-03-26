import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [movies, setMovies] = useState([]);

    const apiBaseURL = `http://127.0.0.1:8000/`

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/movies/");
            setMovies(response.data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const handleDelete = async (movieId) => {
        try {
            await axios.delete(`${apiBaseURL}/movies/${movieId}/`);

            setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
        } catch (error) {
            console.error('Error deleting movie:', error);
        }

    }

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-5">Movie List</h1>
            <div className="flex flex-wrap justify-center">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <>
                            <div className="bg-gray-700 m-4 rounded-md w-[300px] h-[450px]">
                                <img
                                    className="w-full rounded-md h-[300px] object-cover"
                                    src={apiBaseURL + movie.poster}
                                />
                                <div className="flex flex-col justify-center items-center text-white p-2">
                                    <h2 className="text-xl font-bold text-center">{movie.title}</h2>
                                    <div className="text-lg">{movie.year}</div>
                                </div>
                                <div className="flex justify-center items-center space-x-6">
                                    <button onClick={() => handleDelete(movie.id)} className="border rounded-md bg-red-700 text-white p-1 hover:bg-black hover:shadow-sm hover:shadow-yellow-700">Delete</button>
                                    <button className="border rounded-md bg-green-700 text-white p-1 hover:bg-black  hover:shadow-sm hover:shadow-yellow-700">Update</button>
                                </div>
                            </div>
                        </> 
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    );
};

export default Home;
