import { Link } from "react-router-dom"

function Landing(){

return(

<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900">

{/* Navbar */}

<div className="flex justify-between items-center px-12 py-6">

<h1 className="text-xl font-bold tracking-widest">
CreatorCollab
</h1>

<div className="space-x-8 text-gray-300">

<Link to="/">Home</Link>
<Link to="/creator">Creators</Link>
<Link to="/startup">Startups</Link>
<Link to="/login" className="bg-indigo-600 px-5 py-2 rounded-full">
Sign In
</Link>

</div>

</div>


{/* Hero Section */}

<div className="grid md:grid-cols-2 items-center px-12 mt-20">

<div>

<h1 className="text-6xl font-bold mb-6">

Welcome.

</h1>

<p className="text-gray-400 mb-8">

A marketplace connecting creators and brands
for collaboration campaigns.

</p>

<div className="flex gap-4">

<Link
to="/register"
className="bg-indigo-600 px-6 py-3 rounded-full"
>

Free Trial

</Link>

<button className="border border-gray-600 px-6 py-3 rounded-full">

See More

</button>

</div>

</div>


{/* Animated Design */}

<div className="flex justify-center">

<div className="w-80 h-80 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-full blur-3xl opacity-60 animate-pulse"></div>

</div>

</div>

</div>

)

}

export default Landing