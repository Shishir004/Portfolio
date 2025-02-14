import React from 'react'
import { VerticalTimeline, VeritcalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../HOC/index.js';
import { textVariant } from '../utils/motion.js';
import ExperienceCard from './ExperienceCard.jsx';
const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experiences</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,'work');