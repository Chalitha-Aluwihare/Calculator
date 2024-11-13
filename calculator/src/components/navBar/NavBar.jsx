import React from 'react'
import Cal from './Calculator.png'
import img02 from './img02.png'
import img03 from './img03.png'
import img04 from './img04.png'

const NavBar = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='text-right w-[429px] bg-[#1E1E1E] p-2 flex'>
      <button className='mx-1 bg-[#0375F0] rounded-[100px] p-2'>
            <img src={Cal} alt="" />
      </button>
      <button className='mx-1 bg-[#ffffff] rounded-[100px] p-2'>
            <img src={img02} alt="" />
      </button>
      <button className='mx-1 bg-[#ffffff] rounded-[100px] p-2'>
            <img src={img03} alt="" />
      </button>
      <button className='mx-1 bg-[#ffffff] rounded-[100px] p-2'>
            <img src={img04} alt="" />
      </button>
    </div>
    </div>
  )
}

export default NavBar
