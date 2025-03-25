import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [poster, setPoster] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("year", year);
        if (poster) {
            formData.append("poster", poster);
        }

        try {
            await axios.post("http://127.0.0.1:8000/movies/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/");
        } catch (error) {
            console.error("Error adding movie:", error);
        }
    };

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-center mb-5">Add a New Movie</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                <input
                    type="text"
                    placeholder="Movie Title"
                    className="w-full p-2 border mb-3 rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Release Year"
                    className="w-full p-2 border mb-3 rounded"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    className="w-full p-2 border mb-3 rounded"
                    onChange={(e) => setPoster(e.target.files[0])}
                />
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                    Add Movie
                </button>
            </form>
        </div>
    );
};

export default AddMovie;
