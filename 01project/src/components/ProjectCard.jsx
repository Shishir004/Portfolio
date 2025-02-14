import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion.js'
import { Tilt } from 'react-tilt';
import { github } from '../assets/index.js';
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={image}
            className='w-full h-full object-cover rounded-2xl' />
        </div>
        <div className="absolute inset-0 justify-end m-3 card-img_hover">
          <div className="black_gradient w-10 h-10 rounded-full flex justify-center cursor-pointer"
            onClick={() => (window.open(source_code_link, "_blank"))}></div>
          <img src={github} className='w-[40px] h-[40px] object-contain bg-black rounded-2xl
          ml-[300px] -m-5' />
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-2xl'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ProjectCard