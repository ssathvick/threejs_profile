import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { tservices } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const TservicesCard = ({ tservice }) => (
  <VerticalTimelineElement 
  contentStyle={{ background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  iconStyle={{background: tservice.iconBg }}
  icon={<div className="flex justify-center items-center w-full h-full"><img src={tservice.icon} alt={tservice.title} className="w-[80%] h-[80%]"/></div>}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{tservice.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{tservice.company_name}</p>
    </div>
    
    <ul className="mt-5 list-disc ml-5 sapce-y-2">
      {tservice.points.map((point, index) => (
        <li key={`experience-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
          </li>
      ))}
    </ul>
  </VerticalTimelineElement>

)

const Services = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>Solutions we offer</p>
      <h2 className={styles.sectionHeadText}>Services</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
       {tservices.map((ser, index) => (
        <TservicesCard key={index} tservice={ser} />
       ))}

      </VerticalTimeline>

    </div>
    
    </>
  )
}

export default SectionWrapper(Services, 'services')