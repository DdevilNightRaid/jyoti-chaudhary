/* eslint-disable react/no-unknown-property */
// import React from 'react'
import './skillsStyles.css'
const Skills = () => {
  return (
    <div id='skills' className='w-full p-7 skillBody'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#2a9d8f]'>Skills</p>
        <h2 className='py-4 text-[#264653]'>What I Can Teach</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-bold text-[#073B4C]'>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='text-[#264653]'>Maths</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='text-[#264653]'>Opt. Maths</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='text-[#264653]'>English</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='text-[#264653]'>Science</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='text-[#264653]'>Nepali</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='text-[#264653]'>Computer</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='text-[#264653]'>Social</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='text-[#264653]'>HPE</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills