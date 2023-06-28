import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Maps = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9068861057513!2d77.52874841082344!3d12.977807087285376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dc4f0c7bdf1%3A0xf208eb854ec88e15!2sSathvick%20Infotech!5e0!3m2!1sen!2sin!4v1687959893444!5m2!1sen!2sin" className="flex-[0.75] bg-black-100 p-8 rounded=2xl">

      </iframe>
    </div>
  )
}

export default SectionWrapper(Maps, "")


