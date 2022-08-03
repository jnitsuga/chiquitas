import React from 'react'
// import Dropdown from '../components/Dropdown'
// import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { AiFillFacebook,AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

// import { useUserContext } from '../contexts/ContextProvider'

const Topbar = () => {
  // const { userLoggedIn } = useUserContext();

  return (
    <div className='flex w-full items-center justify-between bg-white bg-opacity-100 p-4 drop-shadow-sm h-18 fixed'>
      <div className='title'>
        <Link to='/'>
          <span className='m-2 text-2xl font-bold hover:text-pink-400'>Chiquita's</span>
        </Link>
      </div>

      <div className='space-x-10 font-bold'>
        <Link to='/' className='hover:text-pink-400'>Home</Link>
        <Link to='/menu' className='hover:text-pink-400'>Menu</Link>
        <Link to='/' className='hover:text-pink-400'>About Us</Link>
      </div>

      <div className='flex space-x-4'>
        {/* {userLoggedIn ? 
          <>
          <Dropdown />
          </>
          : 
          <>
            <Link to='/login' style={{ display: 'flex' }} className='m-2 text-sm cursor-pointer items-center'>
              <span><FaSignInAlt /></span>
              <span className='ml-1'>Log In</span>
            </Link>

            <Link to='/register' style={{ display: 'flex' }} className='m-2 text-sm cursor-pointer items-center'>
              <span><FaUser /></span>
              <span className='ml-1'>Register</span>
            </Link> 
          </>
          } */}
          <Link to='/' style={{ display: 'flex' }}><AiFillFacebook className='text-3xl hover:text-pink-400'/></Link>
          <Link to='/' style={{ display: 'flex' }}><AiFillInstagram className='text-3xl hover:text-pink-400'/></Link>     
      </div>
      
    </div>

  )
}

export default Topbar