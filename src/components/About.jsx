import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { cservices } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-32 h-32 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
        

      </motion.div>

    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About us</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.ul variants={fadeIn("", "", 0.1, 1)} 
      className='mt-4 text-secondary text-[17ps] max-w-3xl leading-[30px]'>
       <li>
        Established in 1977 as South India's First ever Photographic Training Institution by Late Dr. S Gundurao
        </li>
        <li>
        Became a Private Limited Company in 2001
        </li>
        <li>
        Evolved through all stages of Media Production and Distribution from 16mm film cameras to current Digital AI Media
        </li>
        <li>
        46 Years of Experience in the field of Audio Visual Production
        </li>
        <li>
        Currently partnered with Blender Foundation to provide web 3.0 Development and Training Solutions with the establishment of First Blender Studio in India
        </li>     

      </motion.ul>

      <div className='mt-20 flex flex-wrap gap-10'>
        {cservices.map((service, index) => (
          <ServiceCard key={service.title}  index={index} {...service}/>
        ))}

      </div>

      
    
    </>
  )
}

export default SectionWrapper(About, "about")