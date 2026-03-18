function Login(){

return(

<div className="flex items-center justify-center min-h-screen bg-black">

<div className="bg-gray-900 p-10 rounded-xl w-96 shadow-lg">

<h2 className="text-2xl mb-6 font-bold">

Sign In

</h2>

<input
placeholder="Email"
className="w-full p-3 mb-4 bg-gray-800 rounded"
/>

<input
type="password"
placeholder="Password"
className="w-full p-3 mb-6 bg-gray-800 rounded"
/>

<button className="w-full bg-indigo-600 p-3 rounded">

Login

</button>

</div>

</div>

)

}

export default Login