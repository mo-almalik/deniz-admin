import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/Login";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import AllProducts from "../pages/Products/AllProducts";
import AddProduct from "../pages/Products/AddProduct";
import Order from "../pages/Order/Order";
import AllServices from "../pages/Services/AllServices";
import AddServices from "../pages/Services/AddServices";
import Shipping from "../pages/Shipping/Shipping";
import AddUser from "../pages/User/AddUser";
import AllUsers from "../pages/User/AllUsers";
import Messages from "../pages/Messages/Messages";
import ViewPartners from "../pages/Partner/ViewPartners";
import Setting from "../pages/Setting/setting";
 

const Routers = createBrowserRouter([
    {index:true, element:<Login />},
    {path:'admin',element:<Layout /> , children:[
     {path:'home', element:<Home />},
     {path:'product/all-products',element:<AllProducts />},
     {path:'product/add-product',element:<AddProduct />},
     {path:"orders" ,element:<Order />},
     {path:"services/add",element:<AddServices />},
     {path:"services/all",element:<AllServices />},
     {path:"shipping",element:<Shipping />},
     {path:"user/add",element:<AddUser />},
     {path:"user/all",element:<AllUsers />},
     {path:"messages",element:<Messages />},
     {path:"partners",element:<ViewPartners />},
     {path:"settings",element:<Setting />},

   ]}

    
])
export default Routers;