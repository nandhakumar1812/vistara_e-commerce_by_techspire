import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Subcription from '../components/Subcription'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className='mt-10 flex flex-col md:flex-row gap-10 items-center justify-center'>
        <div>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        </div>
        <div className='flex justify-center flex-col text-gray-600'>
          <p className='font-bold mb-4 text-2xl'>Our Store</p>
          <p>38, palanipuram <br /> 1st street bhavani, Erode - 638301</p>
          <p className='mt-2'>Tel: 7339218120</p>
          <p>Email: careers.techspire.com@gmail.com</p> 
          <p className='font-bold text-2xl my-6'>Careers at Vistara</p>
          <p className='mb-4'>Learn more about our teams and job openings.</p>
          <div>
            <button className='flex items-start mt-4 border border-black py-3 px-6 text-sm rounded-md hover:bg-black transition-all duration-500 text-black hover:text-white'>Explore Jobs</button> 
          </div>
        </div>
      </div>
      <Subcription />
    </div>
  )
}

export default Contact