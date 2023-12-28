import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd /> ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Intern Software Engineer - Parallax Technologies',
        stage: '2023 Jan - 2023 July',
      },
      {
        title: 'Junior Software Developer - Sterling BPO Solutions',
        stage: '2023 Aug - Present',
      }
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'HND in SE - Institute Of Technology, University of Moratuwa',
        stage: '2019 - 2023',
      }
      // {
      //   title: 'Computer Science Diploma - AV Technical Institute',
      //   stage: '2009',
      // },
      // {
      //   title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
      //   stage: '2006',
      // },
    ],
  },
];

// Components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [ index, setIndex ] = useState(0);
  console.log(index);
  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    {/* avatrImg */}
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit='hidden'
      class="hidden xl:flex absolute bottom-0 -left-[370px]"
    >
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit='hidden'
          className="h2"
        >Capitivating <span className="text-accent">Stories</span> birth magnificent designs
        </motion.h2>
        <motion.p
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit='hidden'
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
        >Two years ago, I began freelancing as a developer, Since then, I,ve done remote work for agencies, counsulted for strtups, and collaborated on digital products for business an consumer use.</motion.p>
        {/* counters */}
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit='hidden'
          className="hidden md:flex md:max-w-none mx-auto xl:mx-0 mb-10"
        >
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={10} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of Experience</div>
            </div>
            {/* project */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={5} duration={10} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Real Wrold Project Conribution</div>
            </div>
          </div>
        </motion.div>  
      </div>
      
      {/* info */}
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit='hidden'
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
      >
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
        {aboutData.map((item, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className={`${
                index === itemIndex % aboutData.length &&
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
              } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => {
                setIndex(itemIndex);
              }}
            >
              {item.title}
            </div>
          );
        })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className="text-2xl text-white">{icon}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      
    </div>
  </div>
};

export default About;
