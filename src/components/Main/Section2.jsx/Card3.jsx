import React from 'react'
import sth2 from '../../../assets/124.png'

const Card3 = () => {
  return (
    <div className='bg-white'>
<section className='pt-[176px]'>
        <div className='w-[1547px] flex gap-[90px] items-center mx-auto '>
                <div>
                    <h2 className='font-semibold text-4xl leading-10 text-start mt-[100px] text-indigo-900 mb-[30px]'><span className='text-amber-500'>Class Management <br /> </span>Tools for Educators</h2>
                    <p className='text-black leading-normal  font-normal text-2xl w-[615px] h-[159px] '>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
                </div>
                <img src={sth2} alt="" />
         </div>
</section>
    </div>
  )
}

export default Card3