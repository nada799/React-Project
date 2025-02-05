import React, { useState, useEffect } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import './ScrollTop.css'

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    };

    window.addEventListener('scroll', handleScroll)

    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  const scrollToTop = () => {
   
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    isVisible && (
      <p
        onClick={scrollToTop}
        // style={styles.scrollButton}
        className='toTop'
      >
        <FaArrowCircleUp/>
      </p>
    )
  )
}

// const styles = {
//   scrollButton: {
//     position: 'fixed',
//     bottom: '30px',
//     right: '30px',
//     border: 'none',
//     padding: '10px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     zIndex: 1000,
//     fontSize:'35px'
//   }
// }

export default ScrollTop;
