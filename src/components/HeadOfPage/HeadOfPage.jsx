import React from 'react'
import './HeadOfPage.css'

function HeadOfPage({title1 , title2}) {
  return (
    <div className='HeadOfPage container'>
      <div>{title1}</div>
      <div> Home / <span> {title2} </span> </div>
    </div>
  )
}

export default HeadOfPage
