import React from 'react'
import girl2 from '../../../assets/Girl2.png'

const Card1 = () => {
  return (
    <div className='bg-white'>
        <h2 className='font-bold text-4xl text-center text-indigo-900'>Our <span className='text-amber-500'>Features</span></h2>
        <p  className='text-black text-center mt-[20px] text-2xl font-normal'>This very extraordinary feature, can make learning activities more efficient</p>


        <div className='w-[1547px] flex gap-[236px] items-center mt-[140px] mx-auto  '>
                <div>
                    <h2 className='font-semibold text-4xl leading-10 text-start mt-[100px] text-indigo-900 mb-[30px] '><span className='text-amber-500'>Tools</span> For Teachers And Learners</h2>
                    <p className='text-black leading-normal  font-normal text-2xl w-[568px] h-[160px] '>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
                </div>
                <img src={girl2} alt="" className='w-[637px] h-[611px]' />
         </div>
    </div>
  )
}

export default Card1