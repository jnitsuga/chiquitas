import React from 'react'

const Menu = () => {
  return (
    <div className='grid grid-cols-6 bg-rose-300 bg-opacity-30'>
      <div className='h-screen flex flex-col justify-center items-center'></div>

      <div className='h-screen flex flex-col justify-center items-center bg-white col-span-4'>
        <p className='text-4xl pb-8'>Menu</p>
        <p className='text-2xl pb-4'>Macarons</p>
      
        <div className='grid grid-cols-2 gap-8'>
          <div>
            <p className='text-xl'>Flavors</p>
            <p>Malagos Chocolate</p>
            <p>Orange Chocolate</p>
            <p>Earl Grey Chocolate</p>
            <p>Pistachio</p>
            <p>Tiramisu</p>
            <p>Cereal Milk</p>
            <p>Oreo Cheesecake</p>
          </div>

          <div>
            <p className='text-xl'>Sizes</p>
            <p>Box of 8 - Php 560</p>
            <p>Box of 12 - Php 840</p>
          </div>
        </div>
      </div>

      <div className='h-screen flex flex-col justify-center items-center'></div>
    </div>
  )
}

export default Menu