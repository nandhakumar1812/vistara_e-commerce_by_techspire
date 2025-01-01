import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes('collection') && showSearch){
      setVisible(true);
    }
    else{
      setVisible(false);
    }
  },[location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center mx-5 my-5 px-5 py-2 border border-gray-400 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(event) => {setSearch(event.target.value)}} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search..' />
        <img className='w-4' src={assets.search_icon} alt="" />
      </div>
      <img src={assets.cross_icon} onClick={() => setShowSearch(false)} className='cursor-pointer w-4 inline' alt="" />
    </div>
  ):null;
}

export default SearchBar