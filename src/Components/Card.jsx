import axios from "axios";

const Card = ({ movie }) => {

    const apiBaseURL = "http://localhost:8000";

    const handleDelete = async () => {
        try {
            await axios.delete(`${apiBaseURL}/movies/${movie.id}/`);
            onDelete(movie.id);
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    }


    return (
        <div className="bg-gray-700 m-4 rounded-md w-[300px] h-[450px]">
            <img
                className="w-full rounded-md h-[300px] object-cover"
                src={movie.poster !== "N/A" ? apiBaseURL + movie.poster : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmovie-poster-background%2F2&psig=AOvVaw2EZBPQc13S6zYTE80Iqt3A&ust=1742895667283000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCe27q2oowDFQAAAAAdAAAAABAE"}
                alt={movie.title}
            />
            <div className="flex flex-col justify-center items-center text-white p-2">
                <h2 className="text-xl font-bold text-center">{movie.title}</h2>
                <div className="text-lg">{movie.year}</div>
            </div>
            <div className="flex justify-center items-center space-x-6">
                <button onClick={handleDelete} className="border rounded-md bg-red-700 text-white p-1 hover:bg-black hover:shadow-sm hover:shadow-yellow-700">Delete</button>
                <button className="border rounded-md bg-green-700 text-white p-1 hover:bg-black  hover:shadow-sm hover:shadow-yellow-700">Update</button>
            </div>
        </div>
    );
};

export default Card;
