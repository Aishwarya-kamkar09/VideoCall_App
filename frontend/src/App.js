import {BrowserRouter,Routes,Route} from "react-router-dom"

import Landing from "./pages/Landing"
import Login from "./pages/Login"
import CreatorDashboard from "./pages/CreatorDashboard"
import StartupDashboard from "./pages/StartupDashboard"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Landing/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/creator" element={<CreatorDashboard/>}/>
<Route path="/startup" element={<StartupDashboard/>}/>

</Routes>

</BrowserRouter>

)

}

export default App