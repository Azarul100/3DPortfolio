import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
  <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >

    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-between items-center'
    >
      <div className="flex flex-col items-center">
        <img src={icon} alt={title}
          className='w-10 h-10 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>

      <p className='text-white text-[14px] mt-4'>{description}</p>
    </div>

  </motion.div>
</Tilt>

  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px max-w-3x1 leading-[30px]'
      >
      I am a recent computer science graduate driven by a passion for technology that was ignited during my high 
      school years. With a bachelor's degree in computer science under my belt, I am eager to further deepen my 
      understanding of the field as I continue to explore its dynamic landscape. While my experience lies in web 
      development, my enthusiasm extends to multiple domains, including roles in QA, data analysis, business analysis, 
      or any other fields involving working with data and technology, reflecting my diverse interests within the 
      realm of computer science. Crafting websites and applications brings me immense joy, and I aspire to contribute 
      to the creation of significant digital platforms. My ultimate goal is to collaborate on the development of 
      substantial websites or applications, leveraging the knowledge and skills I've gained throughout my academic 
      journey to create impactful digital experiences. Below you can find some of my interests outside of Computer 
      Science. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")