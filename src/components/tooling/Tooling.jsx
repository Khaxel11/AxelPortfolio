import './tooling.scss'
import { useRef } from 'react'
import  { motion, useInView, stagger } from 'framer-motion'
import skills from '../../common/portfolio.json'
const Web = "#960000";
const Language = "#008496";
const Movil = "#dd0bba";
const database = "#00965c";
const other = "#cfdd0b";

const legends = [{legend : "Web Development", color: Web},
{legend : "Programming Languages", color : Language},
{legend: "Database Management", color: database},
{legend: "Mobile Apps Development", color: Movil},
{legend: "Others", color : other}
];

const items =  skills.skills;

const Tooling = () => {
 const variants = {
  initial: {
      // x:-500,
      y: -100,
      opacity: 0,
  },
  animate:{
      // x:0,
      opacity : 1,
      y : 0,
      transition:{
          duration : 1,
          staggerChildren: 1,
      },

  }
}
const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

    const ref = useRef()
    const isInView = useInView(ref, {margin:"-200px"})

  return (
    <motion.div className="tooling" variants={variants} initial="initial"
    ref={ref}
    animate={isInView && "animate"}
    >
        <motion.div className="text-container">
            <span>Tooling</span>
        </motion.div>
        <motion.div className="legendContainer">
          {legends.map((legend, index)=>(
            <motion.div className="legendBox" key={index} variants={
              {initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0, transition: { delay: index * 0.5 } },}
            }>
              <div className='boxColor' style={{backgroundColor: legend.color}}></div>
              <p>{legend.legend}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="gridContainer" variants={staggerMenuItems}>
                {items.map((item, index) => (
                    <motion.div
                        className='boxTool'
                        key={index}
                        style={{borderColor: item.color}}
                        variants={{
                            initial: { opacity: 0, y: -10 },
                            animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                    >
                        <motion.img src={`${item.icon}`} alt="" />
                        <motion.span>{item.value}</motion.span>
                    </motion.div>
                ))}
            </motion.div>
    </motion.div>
  )
}

export default Tooling