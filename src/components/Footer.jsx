import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-indigo-950 text-white'>
        <footer className=' text-center w-[1920px] h-[593px]'>
        <div className='flex items-center mx-auto w-[388px] h-[83px] '>
       <img src={logo} alt="" className='mt-[120px]' />
        <h3 className='font-semibold text-2xl text-start ml-10 mt-[120px]'>Virtual Class <br /> for Zoom</h3>
        </div>
        <h2 className='text-gray-300 font-medium text-2xl mt-[95px]'>Subscribe to get our Newsletter</h2>
        <div className='flex items-center justify-center mt-[30px] gap-4'>
            <input type="text" placeholder='   Your Email' className='w-[400px] h-[60px] border-2 rounded-4xl' />
            <button className='w-[179px] h-[60px] bg-blue-600'>Subscribe</button>
        </div>
        <div>
            <h2 className='font-normal text-2xl text-gray-400 mt-[96px] leading-10 tracking-wider'>Careers  |  Privacy Policy  |  Terms & Conditions</h2>
            <p className='mt-[20px] font-normal text-2xl'>© 2021 Class Technologies Inc. </p>
        </div>

        </footer>
    </div>
  )
}

export default Footer