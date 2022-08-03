import React from 'react'

const Scroller = () => {
  return (
    <>
      <div className=''>

        <div className='h-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <p className='font-bold text-9xl text-pink-400'>Chiquita's</p>
            <button className='py-2 px-6 mt-12 font-bold text-white text-3xl bg-pink-400 hover:outline outline-pink-400 outline-offset-2'>
              Order Now
            </button>
          </div>
        </div>

        <div className='h-screen flex justify-center items-center bg-white'>
          Text
        </div>


        <div className='grid grid-cols-2'>
          <div className='h-screen flex flex-col justify-center items-center bg-rose-300'>
            <img src='macarons-01.jpg' alt='macaron' className='h-4/6 mt-24 outline outline-2 outline-white outline-offset-4'></img>
            <button className='outline outline-2 py-2 px-6 mt-12 font-bold text-white text-xl hover:bg-pink-400'>
              Our Story
            </button>
          </div>

          <div className='h-screen flex justify-center items-center bg-white bg-no-repeat bg-cover bg-center'>
            Right
          </div>
        </div>


        <div className='h-screen flex justify-center items-center'>
          Text
        </div>

        <div className='flex flex-col justify-center items-center bg-pink-400 h-14'>
          <p className='text-white font-bold'>Chiquita's</p>
          <p className='text-white text-xs'>All Rights Reserved</p>
        </div>

      </div>
    </>
  )
}

export default Scroller