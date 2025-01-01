import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Product from "./pages/Product"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Cart from "./pages/Cart"
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import ScrollToTop from './components/ScrollToTop'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ScrollToTop />
      <Navbar />
      <ToastContainer />
      <SearchBar />
      <Routes>
        <Route path='vistara_e-commerce_by_techspire/' element={<Home />}/>
        <Route path='vistara_e-commerce_by_techspire/product/:productId' element={<Product />}/>
        <Route path="vistara_e-commerce_by_techspire/collection" element={<Collection />} />
        <Route path="vistara_e-commerce_by_techspire/contact" element={<Contact />} />
        <Route path="vistara_e-commerce_by_techspire/about" element={<About />} />
        <Route path="vistara_e-commerce_by_techspire/login" element={<Login />} />
        <Route path="vistara_e-commerce_by_techspire/place-order" element={<PlaceOrder />} />
        <Route path="vistara_e-commerce_by_techspire/orders" element={<Orders />} />
        <Route path="vistara_e-commerce_by_techspire/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App