import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId){        
        setProductData(item)
        setImage(item.image[0])
        // console.log(productData);
        return null;
      }

    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */} 
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images  */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>(setImage(item))} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                ))
              }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/* ----------Product Info----------- */}
        <div className='flex-1'>
          <h1 className='text-3xl font-medium mt-2'>{productData.name}</h1>
          <h1 className='my-2'>Rating</h1>
            <div className='flex items-center gap-2 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_dull_icon} alt="" className="w-3.5" />
              <p className='pl-2'>(406)</p>
            </div>
            <p className='text-2xl font-medium mt-4'>{currency}&nbsp;{productData.price}</p>
            <p className='mt-4 text-gray-500 text-sm sm:text-md md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p className='text-xl'>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>(setSize(item))} className={`border border-[3px] py-2 px-4 bg-gray-100 ${item===size ? "border-black" : ""}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={() => addToCart(productData._id,size)} className='px-[25px] py-[10px] border bg-black text-white active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-10 border-[#ADADAD]'/>
            <p className='mt-4 text-[#555555]'>100% Original Product.</p>
            <p className='mt-2 text-[#555555]'>Cash on delivery is available on this product.</p>
            <p className='mt-2 text-[#555555]'>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>

      {/* ---------Description and Review Section----------------- */}

      <div className='mt-20'>
		<div className="flex">
			<b className='px-5 py-3 border text-sm'>Description</b>
			<p className='px-5 py-3 border text-sm'>Reviews (87)</p>
		</div>
		<div className='border flex flex-col gap-4 px-6 py-6 text-gray-700 text-sm'>
			<p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
			<p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
		</div>
      </div>
	  	{/* ---------Related Product---------- */}
	  <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product