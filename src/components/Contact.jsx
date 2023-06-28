import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1 )}
      className="flex-[0.75] bg-black-100 p-8 rounded=2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <h3 className={`${styles.heroSubText}`}>Sathvick Infotech Private Limited</h3>
        <p>No.71, 3rd Main Road, Prashanthnagar, Vijayanagar North, Bengaluru 560079</p>
        <p>Website: <a href="https://sathvick.com">https://sathvick.com</a></p>
        <p>Phone Number: +91 9845373385</p>
          <p>email: sudhi@sathvick.com  sathvick@gmail.com</p>
        
        <div className="flex flex-row justify-between">
          <a href="https://www.facebook.com/sathvick" target="_blank"><img src="icons/fb.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.instagram.com/sathvickinfo/" target="_blank"><img src="icons/insta.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.youtube.com/sathvick" target="_blank"><img src="icons/yt.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.linkedin.com/in/sathvick/" target="_blank"><img src="icons/linkdin.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://twitter.com/sathvick" target="_blank"><img src="icons/twitter.svg" className="mt-2 h-10 v-10" /></a>
          
        </div>  
      </motion.div>      
      <div>      
      </div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1 )}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />


      </motion.div>

      


    </div>
  )
}

export default SectionWrapper(Contact, "contact")