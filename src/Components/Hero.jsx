import React from 'react';
import styles from '../style';
import { imagesAsset } from '../images';

function Hero() {
  return (
    <div
      className={`${styles.paragraph} text-justify flex flex-col sm:ml-32  `}
    >
      <div>
        <p>Delicious Pasta</p>
        <p className='text- sm:text-3xl font-bold my-4'>
          Made from love to satisfy your soul
        </p>
      </div>
      <div>
        <p className='text-sm  sm:w-[450px] '>
          Handmade pasta from high protein flour and carefully made with special
          ingredients
        </p>
      </div>
      <div>
        <button className='flex items-center gap-2 bg-[#A09E9E] px-4 py-2 mt-4 rounded-2xl'>
          Order Now
          <img className='w-8' src={imagesAsset.whatsapp}></img>
        </button>
      </div>
    </div>
  );
}

export default Hero;
