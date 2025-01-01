import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

    const date = new Date();

    let year = date.getFullYear();

  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-15 my-8 mt-20 text-sm'>
            <div>
                <img src={assets.vistara_logo} className='mb-5 w-24' alt="" />
                <p className='w-full md:w-2/3 text- text-gray-600'>
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;At Vistara, fashion is more than clothing - it's your statement. Our designs combine timeless elegance with modern trends, crafted for quality and sustainability. Express yourself with confidence and style
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 mt-6'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <NavLink to="vistara_e-commerce_by_techspire" className="cursor-pointer">
                        <li className='my-1'>Home</li>
                    </NavLink>
                    <li className='my-1'>About us</li>
                    <li className='my-1'>Delivery</li>
                    <li className='my-1'>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 mt-6'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li className=''>+91 7339218120</li>
                    <li>careers.techspire.com@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center ubuntu-light'>Copyright {year} &copy; careers.techspire.com@gmail.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer