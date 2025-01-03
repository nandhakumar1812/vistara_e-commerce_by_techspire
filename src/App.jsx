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
        <Route path='vistara_e-commerce_by_techspire/' element={<Home />}/> || <Route path='vistara_e-commerce_by_techspire/vistara_e-commerce_by_techspire/' element={<Home />}/> 
        <Route path='/product/:productId' element={<Product />}/>
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App