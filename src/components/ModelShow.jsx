import React, {  useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import img from '../assets/wx.jpg'
import MoonMan from "./canvas/moonHuman";

function ModelShow() {
  return (
    <div
    className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "spring", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
      <MoonMan/>
      {/* <p className=" text-white w-[200px] h-[200px]">123</p> */}
    </motion.div>
  </div>
  )
}

export default SectionWrapper(ModelShow,'modelshow')