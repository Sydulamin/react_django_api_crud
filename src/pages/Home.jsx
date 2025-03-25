import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, [movies]);

    const fetchMovies = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/movies/");
            setMovies(response.data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const handleDelete = (movieId) => {
        setMovies(movies.filter((movie) => movie.id !== movieId));
    };

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-5">Movie List</h1>
            <div className="flex flex-wrap justify-center">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Card key={movie.id} movie={movie} onDelete={handleDelete} />
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    );
};

export default Home;
