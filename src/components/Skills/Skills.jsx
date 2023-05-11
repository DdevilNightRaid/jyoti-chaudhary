/* eslint-disable react/no-unknown-property */
// import React from 'react'
import '../../App.css'
import './skillsStyles.css'
const Skills = () => {
  return (
    <div id='skills' className='w-full skillBody'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-[#161925] fontC'>Skills</p>
        <h2 className='py-4 blueDark'>I can help you with the follwing subjects:</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-bold darkColor'>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='darkColor'>Chemistry</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='darkColor'>Biology</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='darkColor'>Physics</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='darkColor'>Mathmatics</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='darkColor'>OMaths</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='darkColor'>Computer Classes</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='darkColor'>Accounting</h3>
          </div>
          <div className='flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <h3 classsName='darkColor'>Zology</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills