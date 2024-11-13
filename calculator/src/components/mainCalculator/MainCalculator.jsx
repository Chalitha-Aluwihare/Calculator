import React from 'react'
import Img01 from '../../assets/mainCalculator/img01.png'
import Img02 from '../../assets/mainCalculator/img02.png'
import Img03 from '../../assets/mainCalculator/img03.png'
import Img04 from '../../assets/mainCalculator/img04.png'
import Img05 from '../../assets/mainCalculator/img05.png'
import Img06 from '../../assets/mainCalculator/img06.png'
import Img07 from '../../assets/mainCalculator/img07.png'
import Img08 from '../../assets/mainCalculator/img08.png'
import Img09 from '../../assets/mainCalculator/img09.png'
import Img10 from '../../assets/mainCalculator/img10.png'

import NavBar from '../navBar/NavBar'

const MainCalculator = () => {
  return (
    <div>
      {/*import navbar main calculator window */}
      <NavBar />
    <div className='flex justify-center itemsrow-center '>
    <div className='w-[429px] h-[932px] bg-[#1E1E1E]  text-white grid grid-cols-5 grid-rows-7 gap-2 p-2 pt-[350px]'>
      
      {/*output this calculator*/}
      <div className='col-span-5 mr-2 text-white !text-[50px] font-medium text-right'>27</div>
      <div className='col-span-5 mr-2 text-right text-white !text-[40px] font-light'>=10+17</div>
      
      {/*1st col 7 to 9 number and voice, camera icons*/}
      <div className='p-[13px] text-5xl bg-[#333333] rounded-full text-center hover:bg-[#4B4B4B]'>5</div>
      <div className='text-5xl text-center bg-[#333333] rounded-full p-[13px] hover:bg-[#4B4B4B] '>8</div>
      <div className='text-5xl text-center bg-[#333333] rounded-full p-[13px]  hover:bg-[#4B4B4B]'>9</div>
      <div className='text-5xl flex items-center justify-center bg-[#A6A6A6] rounded-full p-[13px] '><img src={Img01} alt="" /></div>
      <div className='text-5xl flex items-center justify-center text-center bg-[#A6A6A6] rounded-full p-[13px] '><img src={Img02} alt="" /></div>

      {/*2nd col 4 to 6 numbers */}
      <div className='p-[13px] text-5xl bg-[#333333] rounded-full text-center hover:bg-[#4B4B4B]'>4</div>
      <div className='text-5xl text-center bg-[#333333] rounded-full p-[13px] hover:bg-[#4B4B4B]'>5</div>
      <div className='text-5xl text-center bg-[#333333] rounded-full p-[13px] hover:bg-[#4B4B4B]'>6</div>
      <div className='text-5xl flex items-center justify-center bg-[#A6A6A6] rounded-full p-[13px] col-span-2 '><img src={Img03} alt="" /></div>
      
      {/*3rd col 1 to 3 numbers */}
      <div className='p-[13px] text-5xl bg-[#333333] rounded-full text-center hover:bg-[#4B4B4B]'>1</div>
      <div className='text-5xl text-center bg-[#333333] rounded-full p-[13px] hover:bg-[#4B4B4B]'>2</div>
      <div className='text-5xl text-center bg-[#333333] rounded-full p-[13px] hover:bg-[#4B4B4B]'>3</div>
      <div className='text-5xl flex items-center justify-center bg-[#A6A6A6] rounded-full p-[13px] col-span-2 '><img src={Img04} alt="" /></div>
      
      {/*4th col 0 to . numbers */}
      <div className='p-[13px] text-5xl bg-[#333333] rounded-full text-center col-span-2 hover:bg-[#4B4B4B]'>0</div>
      <div className='text-5xl text-center bg-[#333333] rounded-full p-[13px] hover:bg-[#4B4B4B]'>.</div>
      <div className='text-5xl flex items-center justify-center bg-[#A6A6A6] rounded-full p-[13px] col-span-2 '><img src={Img10} alt="" /></div>
      
      {/*5th col maths operations icons */}
      <div className='flex items-center justify-center bg-[#0375F0] rounded-full '><img src={Img05} alt="" /></div>
      <div className='flex items-center justify-center bg-[#0375F0] rounded-full '><img src={Img06} alt="" /></div>
      <div className='flex items-center justify-center bg-[#0375F0] rounded-full '><img src={Img07} alt="" /></div>
      <div className='flex items-center justify-center bg-[#0375F0] rounded-full '><img src={Img08} alt="" /></div>
      <div className='flex items-center justify-center bg-[#0375F0] rounded-full '><img src={Img09} alt="" /></div>

    </div>
    </div>
    </div>
  )
}

export default MainCalculator
