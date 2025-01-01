import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-10 min-h-[80vh] border-t '>
      {/* -----------------Left Side-------------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className='flex gap-3'>
          <input placeholder='First name' className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="text"  />
          <input placeholder='Last name' className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="text"  />
        </div>
        <input placeholder='Email address' className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="email"  />
        <input placeholder='Street' className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="text"  />
        <div className='flex gap-3'>
          <input placeholder='City' className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="text"  />
          <input placeholder='State' className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="text"  />
        </div>
        <div className='flex gap-3'>
          <input placeholder='Zipcode' className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="number"  />
          <input placeholder='Country' className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="text"  />
        </div>
        <input placeholder='Phone' className='border border-gray-300 rounded px-3.5 py-1.5 w-full' type="text"  />
      </div>
      {/* ----------------Right Side------------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''} `} ></p>
              <img src={assets.stripe_logo} className='h-5 mx-5' alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''} `} ></p>
              <img src={assets.razorpay_logo} className='h-5 mx-5' alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''} `} ></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end my-10'>
            <button onClick={()=>{navigate('/orders')}} className='px-16 py-3 bg-black border text-sm text-white'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder