import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { colors } from "../utils/colors";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>个人介绍</p>
        <h2 className={styles.sectionHeadText}>概述</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       我熟练使用
       <span className="font-bold" style={{color:colors.js}}>JavaScript</span>
       /
       <span className="font-bold" style={{color:colors.ts}}>TypeScript</span>
       语言进行日常开发。
       <div>
          拥有
        <span className="font-bold" style={{color:colors.react}}>React</span>
          和
        <span className="font-bold" style={{color:colors.vue}}>Vue</span>
          框架方面的经验
        </div>
       <div>
          熟练使用
          <span className="font-bold" style={{color:colors.react}}>React Native</span>
          开发手机端App
        </div>
       <div>
          熟练使用
          <span className="font-bold" style={{color:colors.react}}>React</span>
          +
          <span className="font-bold" style={{color:colors.three}}>Three.js</span>
          独立开发网页3D效果
        </div>
       <div>
        也能够使用
        <span className="font-bold" style={{color:colors.nodejs}}>Node.js</span>
        /
        <span className="font-bold" style={{color:colors.express}}>express</span>
        /
        <span className="font-bold" style={{color:colors.nestjs}}>nest.js</span>
        开发简单的后台系统
        </div>
       <div>能够在日常工作中高效率的工作以及快速学习</div>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
