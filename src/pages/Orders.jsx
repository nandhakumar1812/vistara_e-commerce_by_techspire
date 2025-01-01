import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const {products, currency} = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {
          products.slice(1,4).map((item, index)=>(

            // {UI Part for Order page}
            
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4' >
              <div className='flex items-start gap-4 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='font-medium text-lg'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='font-medium text-lg'>{currency}{item.price}</p>
                    <p className='font-medium text-lg'>Quantity: 1</p>
                    <p className='font-medium text-lg'>Size: M</p>
                  </div>
                  <p className='mt-2 text-lg'>Date: <span className='text-gray-400'>18, Dec, 2024</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to Ship</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-md'>Track Order</button>
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Orders