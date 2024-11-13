import React from 'react'
import Img01 from '../../assets/home/img01.png'

const Home = () => {
  return (
    <div className='relative flex flex-col items-center justify-center '>
      <div className=''><img src={Img01} alt="" /></div>
      <div className='grid grid-rows-9 '>
        
        <div className='inline-block row-span-2 bg-red-400'>WELCOME TO</div>
        <div>AI-POWERED</div>
        <div>CALCULATOR</div>

        <div></div>

        <div></div>
        <div></div>
        <div></div>

      </div>   
      
    </div>
  )
}

export default Home
