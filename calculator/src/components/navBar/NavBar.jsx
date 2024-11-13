import React from 'react'
import Img01 from '../../assets/navBar/Calculator.png'
import Img02 from '../../assets/navBar/img02.png'
import Img03 from '../../assets/navBar/img03.png'
import Img04 from '../../assets/navBar/img04.png'

const NavBar = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='text-right w-[429px] bg-[#1E1E1E] p-2 flex'>
      
      {/*Calculator button */}
      <button className='mx-1 bg-[#0375F0] rounded-[100px] p-2'>
            <img src={Img01} alt="Calculator" />
      </button>
      
      {/*Settings button */}
      <button className='mx-1 bg-[#ffffff] rounded-[100px] p-2'>
            <img src={Img02} alt="Settings" />
      </button>

      {/*History button */}
      <button className='mx-1 bg-[#ffffff] rounded-[100px] p-2'>
            <img src={Img03} alt="History" />
      </button>
      
      {/*Home */}
      <button className='mx-1 bg-[#ffffff] rounded-[100px] p-2'>
            <img src={Img04} alt="Home" />
      </button>
    </div>
    </div>
  )
}

export default NavBar
