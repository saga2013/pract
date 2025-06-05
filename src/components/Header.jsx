import React from 'react'
import logo from '../assets/logo.png'
import watch from '../assets/Group 4.png'
import girl from '../assets/girl.png'

const Header = () => {
  return (
    <div className='bg-white'>
        <header className='w-[1920px] h-[1118px] px-10 bg-orange-50'>
            <nav className='flex items-center w-full pl-[100px] py-[60px] pr-[126px] justify-around'>
                <img src={logo} alt="" />
                <ul className='text-black flex gap-[60px] ml-[561px] mr-[60px] '>
                    <li className='font-normal text-2xl'>Home</li>
                    <li className='font-normal text-2xl'>Careers</li>
                    <li className='font-normal text-2xl'>Blog</li>
                    <li className='font-normal text-2xl'>About us</li>
                </ul>
                <div className='flex gap-[34px]  '>
                <button className='bg-white w-[160px] h-[60px] rounded-3xl shadow-[0px_20px_24px_0px_#00000008]'>Log in</button>
                <button className='bg-amber-600 w-[160px] h-[60px] shadow-[0px_20px_24px_0px_#00000008] '>Sign up</button>
                </div>
            </nav>
            <div className='mx-[140px] flex items-center justify-between'>
                <div className="">
                    <h1 className='font-bold text-4xl text-start text-indigo-900'><span className='text-amber-500'>Studying</span> Online is now <br /> much easier</h1>
                    <p className='text-2xl font-normal text-black mt-[34px] '>Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>
                    <div className='flex items-center '> 
                    <button className='bg-amber-600 w-[160px] h-[60px] shadow-[0px_20px_24px_0px_#00000008]  '>Join for free</button>
                    <div className='flex items-center gap-[22px]'>
                    <img src={watch} alt="" className='w-[160px] h-[160px] mb-[-20px]' />
                    <p className='text-2xl font-normal text-black '>Watch how it works</p>
                    </div>
                    </div>
                </div>
                <img src={girl} alt="" />
            </div>
        </header>
    </div>
  )
}

export default Header