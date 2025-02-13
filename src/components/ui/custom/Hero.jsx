import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button } from '../button';

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span className='text-[#A35C7A]'>Discover Your Next Adventure</span>
      </h1>
      <p className='text-xl text-[#C890A7] text-center'>
        Your personal travel planner
      </p>

      <Link to ={'/create-trip'}>
        <Button>Get Started, It's</Button>
      </Link>
    </div>
  
  );
}

export default Hero;
