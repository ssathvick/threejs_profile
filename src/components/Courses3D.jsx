import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { courses3D } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";

const Course3DCard = ({ index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75 )}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"      
      >
        <div className="relative w-full h-[230px]">
          <img
            src={ image}
            alt={ name }
            className="w-full h-full object-cover rounded-2xl"          
          />

          <div className="absolute inset-0 flex justify-end card-img_hover">
            <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w=1/2 h-1/2 object-contain"/>

            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}  >
              #{tag.name}
            </p>
          ))}

        </div>

      </Tilt>
    </motion.div>

  )

}
const Courses3D = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>Skill Development Programmes</p>
      <h2 className={styles.sectionHeadText}>3D Modelling & Gaming</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Being Associated with blender right from its birth in 2001 we are now the official training partners of blender and are having a complete training and development center at our premises. We offer exclusive courses in blender, unity and unreal for gaming enthusiasts
      </motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {courses3D.map((project, index) => (
        <Course3DCard key={`project-${index}`}
        index={index}
        {...project} 
      />
      ))}

    </div>
    
    </>
  )
}

export default SectionWrapper(Courses3D, "")