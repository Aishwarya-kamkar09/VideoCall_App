function CreatorDashboard(){

const collabs=[
{brand:"TechBrand",task:"1 Reel + 1 Story"},
{brand:"FitnessApp",task:"1 Reel + 1 Story"},
{brand:"FashionHub",task:"1 Reel + 1 Story"}
]

return(

<div className="min-h-screen bg-black p-12">

<h1 className="text-3xl font-bold mb-8">
Available Collaborations
</h1>

<div className="grid md:grid-cols-3 gap-6">

{collabs.map((c,i)=>(

<div
key={i}
className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
>

<h2 className="text-xl font-semibold">
{c.brand}
</h2>

<p className="text-gray-400 mt-2">
{c.task}
</p>

<button className="mt-4 bg-indigo-600 px-4 py-2 rounded">

Accept

</button>

</div>

))}

</div>

</div>

)

}

export default CreatorDashboard