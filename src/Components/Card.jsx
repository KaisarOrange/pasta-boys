import React from 'react';
import { FaStar, FaBitcoin } from 'react-icons/fa';

function Card({ image, name, price }) {
  return (
    <div className=' rounded-lg overflow-hidden w-48 h-72 lg:w-64 lg:h-80 bg-[#F5F5F5] drop-shadow-2xl'>
      <img src={image} className='w-full h-1/2 object-cover' />
      <div className='flex flex-col gap-16 m-2'>
        <div>
          <h2 className='text-[#000000] text-xl  '>{name}</h2>
          <div className='flex'>
            <FaStar className='fill-[#FFE81D] ' />
            <FaStar className='fill-[#FFE81D] ' />
            <FaStar className='fill-[#FFE81D] ' />
            <FaStar className='fill-[#FFE81D] ' />
            <FaStar className='fill-[#FFE81D] ' />
          </div>
        </div>
        <div className='text-[#000000] '>{price}</div>
      </div>
    </div>
  );
}

export default Card;
