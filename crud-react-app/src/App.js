import "./App.css";
import "./components/form/Form.css";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/page/NotFound";
import Cart from "./components/page/Cart";
import Login from "./components/form/Login";
import Signup from "./components/form/Signup";
import AddUser from "./components/addmin/AddUser";
import EditUser from "./components/addmin/EditUser";
import HomeAdmin from "./components/addmin/HomeAdmin";
import HomeProducts from "./components/addmin/HomeProducts";
import OrderList from "./components/addmin/OrderList";
import AddProduct from "./components/addmin/AddProduct";
import EditProduct from "./components/addmin/EditProduct";



function App() {
  return (
    <>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/homeAdmin" element={<HomeAdmin />}></Route>
          <Route path="/homeProducts" element={<HomeProducts />}></Route>
          <Route path="/orderList" element={<OrderList />}></Route>
          <Route path="/addUser" element={<AddUser />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/editProduct/:id" element={<EditProduct />}></Route>
          <Route path="/editUser/:id" element={<EditUser />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
          
    </>
  );
}

export default App;
