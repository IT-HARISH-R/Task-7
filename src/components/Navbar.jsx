import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto">
      <Link to="/" className="text-2xl font-bold">Movies Search App</Link>
    </div>
  </nav>
);

export default Navbar;
