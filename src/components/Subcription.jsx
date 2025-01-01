import React from 'react'

const Subcription = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center mt-16'>
        <p className='text-3xl font-extrabold text-gray-800 varela-round-regular'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Enjoy exclusive deals, faster delivery, early access to sales, and special discounts when you subscribe to our e-commerce site!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto pl-3 my-6 border'>
            <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter your email id' required/>
            <button type='submit' className='bg-black text-white text-xs py-4 px-10'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default Subcription