import React from 'react';
import styles from '../style';
import { useNavigate } from 'react-router-dom';
import { imagesAsset } from '../images';
import Ref from './Ref';
function Contact() {
  return (
    <div className='flex flex-col justify-center items-center pt-24'>
      <div className={`${styles.contact} text-center text-4xl `}>
        Contact Pasta Boys
      </div>
      <div className='flex gap-14 lg:gap-56 mt-40 '>
        <Ref link={1} image={imagesAsset.instagram} title={'@pastaboys.id'} />
        <Ref link={2} image={imagesAsset.whatsapp} title={'Whatsapp'} />
      </div>
    </div>
  );
}

export default Contact;
