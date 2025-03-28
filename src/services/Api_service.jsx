import axios from "axios";

const API_URL = "http://localhost:8000";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
