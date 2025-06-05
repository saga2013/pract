import React from 'react'
import logos from '../../assets/logos.png'
import image from '../../assets/image.png'
import watch from '../../assets/Group 4.png'

const Section1 = () => {
  return (
    <div className='bg-white w-full  flex items-center justify-center flex-col'>
        <h2 className='text-black font-medium text-3xl mt-[100px]'>Trusted by 5,000+ Companies Worldwide</h2>
        <img src={logos} alt=""  className='mt-[32px] '/>
        <div>
            <h1 className='font-semibold text-4xl text-center mt-[100px] text-indigo-900'>What is <span className='text-amber-500'>Skilline?</span></h1>
            <p className='text-black text-center mt-[20px] text-2xl font-normal'>Skilline is a platform that allows educators to create online classes whereby they can <br /> store the course materials online; manage assignments, quizzes and exams; monitor <br /> due dates; grade results and provide students with feedback all in one place.</p>
            <div className=' flex items-center gap-[100px] mt-[80px]'>
                <div  className='w-[600px] h-[400px] bg-cover bg-center ' style={{ backgroundImage: `url(${image})` }}>
                    <div className='flex flex-col justify-center items-center '>
                        <h3 className='text-white font-semibold text-3xl mt-[132px]' >FOR INSTRUCTORS</h3>
                        <button className='w-[231px] h-[80px] bg-blue-300 mt-[41px] '>Start a class today</button>

                    </div>
                </div>
                <div  className='w-[600px] h-[400px] bg-cover bg-center ' style={{ backgroundImage: `url(${image})` }}>
                    <div className='flex flex-col justify-center items-center '>
                        <h3 className='text-white font-semibold text-3xl mt-[132px]' >FOR STUDENTS</h3>
                        <button className='w-[231px] h-[80px] bg-blue-300 mt-[41px] '>Enter access code</button>

                    </div>
                </div>
            </div>
        </div>
        <div className='w-[1547px] h-[512px] flex gap-[142px] items-center mt-[140px] mb-[122px] '>
                <div>
                    <h2 className='font-semibold text-4xl leading-10 text-start mt-[100px] text-indigo-900 mb-[30px]'><span className='bg-amber-500 w-[75px] h-[95px] rounded-full'>Eve</span>rything you can do in a physical <br /> classroom, <span className='text-amber-500'>you can do with Skilline</span></h2>
                    <p className='text-black leading-normal  font-normal text-2xl '>Skilline’s school management software helps traditional <br /> and online schools manage scheduling, attendance, <br /> payments and virtual classrooms all in one secure <br /> cloud-based system.</p>
                    <p className='text-black leading-normal font-normal text-2xl mt-[30px]'>Learn more</p>
                </div>
                <div  className='w-[705px] h-[471px] bg-cover bg-center ' style={{ backgroundImage: `url(${image})` }}>
                    <div className='flex justify-center items-center '>
                        <img src={watch} alt="" className='mt-[150px]  ' />
                    </div>
                </div>
         </div>
    </div>
  )
}

export default Section1