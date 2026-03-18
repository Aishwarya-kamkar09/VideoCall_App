import {useState} from "react"

function StartupDashboard(){

const [title,setTitle]=useState("")
const [posts,setPosts]=useState([])

const post=(e)=>{

e.preventDefault()

setPosts([...posts,{title}])

setTitle("")

}

return(

<div className="min-h-screen bg-black p-12">

<h1 className="text-3xl font-bold mb-6">

Post Collaboration

</h1>

<form onSubmit={post} className="mb-10">

<input
value={title}
onChange={(e)=>setTitle(e.target.value)}
placeholder="Campaign Title"
className="p-3 bg-gray-900 rounded mr-3"
/>

<button className="bg-indigo-600 px-5 py-3 rounded">

Post

</button>

</form>

<div className="grid md:grid-cols-2 gap-6">

{posts.map((p,i)=>(

<div key={i} className="bg-gray-900 p-6 rounded-xl">

<h2 className="text-xl">{p.title}</h2>

<p className="text-gray-400 mt-2">
1 Reel + 1 Story
</p>

</div>

))}

</div>

</div>

)

}

export default StartupDashboard