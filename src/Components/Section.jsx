import React from 'react';
import img from '../img/bg.avif'
import Lenis from '@studio-freight/lenis'
function Section() {
  
  return (
    <>
      <div className='bg-[#ffff00] h-96 w-full flex justify-between py-20 px-6 '>
        <div className='pop text-black'>
          <p>Biggest Online <br /> Learning Platform</p>
        </div>
        <div className='pop text-black text-5xl font-bold '>
          <h1 className='text-center relative z-10 leading-[60px]'>Today Let's Learn <br />From Online</h1>
        </div>
        <div className='pop text-black'>
          <p>Watch<br /> Promo</p>
        </div>
        <div className='absolute bottom-14 left-1/4 z-0 w-2/4 h-64 overflow-hidden rounded-full '>
          <img src={img} alt="" className='object-cover' />
        </div>
      </div>
      <div className='bg-[#ffffff] w-full h-[300px] flex justify-between px-6 py-11 '>
        <div className='pop text-black pop'>
          <p className='font-bold text-4xl'>1560</p>
          <div className='bg-[#8fe93b] h-1 my-1'></div>
          <p>
            New Subscribes<br />
            this month
          </p>
        </div>

        <div className='pop text-black  font-bold py-8 '>
          <p className='rotate-90'>SCROLL DOWN</p>
        </div>
      </div>

      <div className='w-full flex justify-between items-center px-6 '>
        <div className='pop text-black  text-xl '>
          <p>
            Dont Expect The Results Without The<br />
            Work."the Only Place Where Success<br />
            Comes Before Work Is in The Dictionary"
          </p>
          <h3 className='font-semibold my-2'>
            ---Ayush Kumar
          </h3>
        </div>
        <div className='flex justify-between gap-8'>
<div className='h-[400px] w-[300px] bg-purple-600'>

</div>
<div  className='h-[400px] w-[300px] bg-green-600'></div>
        </div>
      </div>

    </>



  );
}

export default Section;
