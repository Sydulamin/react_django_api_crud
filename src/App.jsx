import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <Link to="/" className="text-xl font-bold">Movie App</Link>
        <Link to="/add-movie" className="bg-green-500 px-3 py-2 rounded">Add Movie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
