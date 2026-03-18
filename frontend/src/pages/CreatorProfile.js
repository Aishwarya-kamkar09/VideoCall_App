import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function CreatorProfile(){

const navigate = useNavigate();

const [profile,setProfile]=useState({
  niche:"",
  instagram:"",
  followers:""
})

const submitProfile = async(e)=>{

e.preventDefault();

await API.post("/creator/profile",profile,{
 headers:{Authorization:localStorage.getItem("token")}
});

navigate("/creator-dashboard")

}

return(

<div className="p-10">

<h1 className="text-2xl mb-5">Creator Profile</h1>

<form onSubmit={submitProfile} className="max-w-md">

<input placeholder="Niche"
className="border p-2 w-full mb-3"
onChange={(e)=>setProfile({...profile,niche:e.target.value})}
/>

<input placeholder="Instagram"
className="border p-2 w-full mb-3"
onChange={(e)=>setProfile({...profile,instagram:e.target.value})}
/>

<input placeholder="Followers"
className="border p-2 w-full mb-3"
onChange={(e)=>setProfile({...profile,followers:e.target.value})}
/>

<button className="bg-blue-500 text-white p-2 w-full">
Save Profile
</button>

</form>

</div>

)

}

export default CreatorProfile