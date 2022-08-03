import React, { useState, useEffect } from 'react'
import { FaLongArrowAltUp } from 'react-icons/fa'

const ScrollToTopButton = () => {
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowScrollTopBtn(true)
      } else {
        setShowScrollTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  

  return (
    <div>
      {showScrollTopBtn && (
        <button 
        className='text-white bg-stone-700 text-3xl rounded-full p-2 fixed bottom-5 right-5 drop-shadow-xl hover:bg-pink-400'
        onClick={goToTop}
        >
          <FaLongArrowAltUp />
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton