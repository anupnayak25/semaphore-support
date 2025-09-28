import React from 'react'
import { Link } from 'react-router-dom'
function ImgCard({route,img}) {
  return (
    <Link to={route}>
    <div className="border-2 border-black/10 max-w-100 rounded-lg overflow-hidden shadow-lg outline-2 outline-offset-2 outline-black/50 hover:scale-105 transition-transform duration-300 cursor-pointer">

      <img src={img} alt="" />
    </div>
    </Link>
  )
}

export default ImgCard
