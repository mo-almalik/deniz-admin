import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/Login";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import AllProducts from "../pages/Products/AllProducts";
import AddProduct from "../pages/Products/AddProduct";
 

const Routers = createBrowserRouter([
    {index:true, element:<Login />},
    {path:'admin',element:<Layout /> , children:[
     {path:'home', element:<Home />},
     {path:'product/all-products',element:<AllProducts />},
     {path:'product/add-product',element:<AddProduct />},
   ]}

    
])
export default Routers;