import './hero.scss'
import { motion } from 'framer-motion'
// import LaptopImage from '../../../public/Laptop.png';

const textVariants = {
  initial: {
    x: -500,
    opacity : 0,
  },
  animate: {
    x: 0,
    opacity : 1,
    transition:{
      duration : 1,
      staggerChildren : 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition:{
      duration:2,
      repeat: Infinity,
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition:{
      repeat: Infinity,
      repeatType : "mirror",
      duration : 20,
      
    },
  }
}
const handleScrollToAbout = () => {
  const aboutSection = document.getElementById('About');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const handleScrollToContact= () => {
  const contactSection = document.getElementById('Contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants} >SOFTWARE ENGENIEER</motion.h2>
          <motion.h1 variants={textVariants} >FullStack Developer</motion.h1>
          <motion.div className="buttons variants={textVariants} ">
          <motion.button variants={textVariants} onClick={handleScrollToAbout} whileHover={{scale:1.1}} whileTap={{scale: 0.95}}>
            About Me
          </motion.button>
            <motion.button variants={textVariants} onClick={handleScrollToContact} whileHover={{scale:1.1}} whileTap={{scale: 0.95}}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants}  src="./scroll.png" alt="" animate="scrollButton"/>
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Software Engenieer
      </motion.div>
{/* 
      <motion.div className="imageContainer" initial={{ y: 500}} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.8 }}>
        <img src={'./hero-1.png'} alt="Hero" />
      </motion.div> */}
      <motion.div className="imageContainer"
        initial={{ y: 500}} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.8 }}
        >
          <img  src={'./hero-1.png'} alt={'AA'} />
      </motion.div>
    </div>
  )
}

export default Hero