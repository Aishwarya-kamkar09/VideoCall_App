import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-black text-white">

      <h1 className="text-xl font-bold">CreatorCollab</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">Register</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
      </div>

    </div>
  );
}

export default Navbar;