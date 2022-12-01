import React from 'react';
import { imagesAsset } from './images';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Main from './Components/Main';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <div
        className='bg-local '
        style={{
          backgroundImage: `url(${imagesAsset.stone})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <div
          className='bg-local  h-screen'
          style={{
            backgroundImage: `url(${imagesAsset.pasta})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className='flex flex-col gap-20 lg:gap-44 bg-back h-screen px-20'>
            {' '}
            <Navbar />
            <Hero />
          </div>
        </div>
        <div
          className='bg-local  h-screen'
          style={{
            backgroundImage: `url(${imagesAsset.pastaBackTwo})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          {' '}
          <div
            id='hello'
            className='flex flex-col gap-44 bg-back h-screen sm:px-20'
          >
            {' '}
            <Main />
          </div>
        </div>
        <div
          className='bg-local  h-screen'
          style={{
            backgroundImage: `url(${imagesAsset.backThree})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          {' '}
          <div
            id='contact'
            className='flex flex-col gap-44 bg-back h-screen md:px-20'
          >
            {' '}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
