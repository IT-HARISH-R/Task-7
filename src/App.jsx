import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
