import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();
  const [role,setRole] = useState("creator");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(role==="creator"){
      navigate("/creator-dashboard");
    } else {
      navigate("/startup-dashboard");
    }
  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow w-96"
      >

        <h2 className="text-2xl font-bold mb-6">Create Account</h2>

        <input
          placeholder="Name"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
        />

        <select
          onChange={(e)=>setRole(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        >
          <option value="creator">Creator</option>
          <option value="startup">Startup</option>
        </select>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Register
        </button>

      </form>

    </div>

  );
}

export default Register;