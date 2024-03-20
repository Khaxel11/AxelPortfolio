import './about.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

const imgVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-20%",
    transition: {
      yoyo: Infinity,
      repeat: Infinity,
      repeatType: "mirror",
      duration: 3,
    },
  }
}

const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

const About = () => {
  const text = "Hello I Am Axel".split("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingTimer = setInterval(() => {
      setLetterIndex((prev) => prev + 1);
    }, 700); 

    return () => clearInterval(typingTimer);
  }, []);

  useEffect(() => {
    if (letterIndex >= text.length) {
      // setIsTyping(false);
    }
  }, [letterIndex, text]);

  const cursorVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className='about'>
      <motion.div className="imageContainer" variants={imgVariants} initial="initial" animate="animate">
        <motion.img src="/Laptop.png" alt="" />
      </motion.div>
      <motion.div className="nameContainer" variants={textVariants}>
        {text.slice(0, letterIndex).map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: i / 45,
            }}
            key={i}
            style={{ color: i >= 10 ? 'orange' : '' }}

          >
            <b >{el}{" "}</b>
          </motion.span>
        ))}
        {isTyping && (
          <motion.span
            variants={cursorVariants}
            initial="hidden"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            style={{ display: 'inline-block', marginLeft: '5px' }}
          >
            |
          </motion.span>
        )}
        {letterIndex >= text.length ? (
          <motion.h5 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.75,
            
          }}
          >Axel Aguilar</motion.h5>
        ) : null}
      </motion.div>
      <div className="descriptionContainer"></div>
    </div>
  );
}

export default About;
