import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/Login";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
 

const Routers = createBrowserRouter([
    {index:true, element:<Login />},
    {path:'/admin',element:<Layout /> , children:[
     {index:true, element:<Home />},
   ]}

    
])
export default Routers;