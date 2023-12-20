import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from '../components/Layouts';
import Home from "../views/Home/Home";
import ProductsIndex from "../views/ProductsIndex/ProductsIndex";
import About from "../views/About/About";
import Contact from "../views/Contact/Contact";
import ProductDetail from "../components/Products/ProductDetail";
import Cart from "../views/Cart/CartIndex";
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

function PublicRoutes() {
  return (
      <BrowserRouter>
       <ToastContainer/>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index  element={<Home/>}/>
              <Route path="/products" element={<ProductsIndex/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route exact path="/products/:id"  element={<ProductDetail/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
          </Route>     
        </Routes>
    </BrowserRouter>
  );
}

export default PublicRoutes;
