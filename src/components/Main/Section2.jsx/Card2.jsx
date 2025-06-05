import React from 'react'
import sth from '../../../assets/Group92.png'

const Card2 = () => {
  return (
    <div className='bg-white'>
<section className='pt-[196px]'>
        <div className='w-[1547px] flex gap-[246px] items-center mx-auto '>
                <img src={sth} alt="" className='w-[637px] h-[611px]' />

                <div>
                    <h2 className='font-semibold text-4xl leading-10 text-start mt-[100px] text-indigo-900 mb-[30px]'>Assessments, <br /> <span className='text-amber-500'>Quizzes,</span> Tests</h2>
                    <p className='text-black leading-normal  font-normal text-2xl w-[556px] h-[120px] '>Easily launch live assignments, quizzes, and <br /> tests. Student results are automatically entered in the online gradebook.</p>
                </div>
         </div>
</section>
    </div>
  )
}

export default Card2