import React from 'react'
import {BallCanvas} from './canvas'
import {SectionWrapper} from '../HOC/index.js'
import {technologies} from '../constants/index.js'; 
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech,index)=>(
        <div className='w-28 h-28 ' key={index}>
          <BallCanvas icon={tech.icon}/> 
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"Technologies");