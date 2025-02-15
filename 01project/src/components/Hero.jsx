import React from 'react'
import {motion} from 'framer-motion';
import styles from '../styles';
import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row
        items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='sm:h-80 h-40 bg-[#915eff] w-1 violet-gradient'/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Shishir</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop Full Stack responsive websites,<br className='sm:block hidden'/> user Interfaces and web applications
            </p>
          </div>
        </div>
        <ComputersCanvas/>
        <div className="absolute xs:bottom-10 bottom-32 top-[650px] w-full flex justify-center items-center">
          <a href='#about'>
            <div className='w-[35px] h-[64px] border-4 border-secondary flex justify-center rounded-3xl
            items-start p-2'>
              <motion.div
              animate={{
                y:[0,28,0]
              }}
              transition={{
                duratin:3.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"/>
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero