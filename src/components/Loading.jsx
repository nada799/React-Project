import React from "react";
import loading from '../assets/images/loder.gif'

const Loading = () => {
  return (
    <div className="loading-container d-flex align-items-center justify-content-center vh-100">
      <img src={loading} className="w-25"/>
    </div>
  )
}

export default Loading;
