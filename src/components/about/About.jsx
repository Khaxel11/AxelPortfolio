import './about.scss'
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, stagger } from 'framer-motion'
import { Spotify } from 'react-spotify-embed'
const spotifyURL= "https://open.spotify.com/intl-es/track/0wEGo9LsSrSUz9HOtraWAO?si=9d69e97c7cdc4f54";
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
      delay: 0.1,
      duration: 0.1,
      type: "spring",
      stiffness: 80,
    },
  },
};
const descriptionVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
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
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {

      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 1,
      },

    }
  }
  const ref = useRef()
  const isInView = useInView(ref, { margin: "0px" })
  return (
    <motion.div className='about' ref={ref} variants={variants} initial="initial" animate={isInView && "animate"}>

      <motion.div className="imageContainer" variants={imgVariants} initial="initial" animate={isInView && "animate"} >
        <motion.img src="/Laptop.png" alt="" />
      </motion.div>
      {isInView && (
        <motion.div className="nameContainer" variants={textVariants} initial="initial" animate={isInView && "animate"} >
          {text.slice(0, letterIndex).map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView && { opacity: 1 }}
              transition={isInView && {
                duration: 0.75,
                delay: i / 45,
              }}
              key={i}
              style={{ color: i >= 10 ? '#ea412a' : '' }}

            >
              <b >{el}{" "}</b>
            </motion.span>
          ))}
          {(
            <motion.span
              variants={cursorVariants}
              initial="hidden"
              animate={isInView && { opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              style={{ display: 'inline-block', marginLeft: '5px' }}
            >
              |
            </motion.span>
          )}
          {letterIndex >= text.length ? (
            <motion.h5
              initial={{ opacity: 0 }}
              animate={isInView && { opacity: 1 }}
              transition={{
                duration: 0.75,

              }}
            >Axel Aguilar</motion.h5>
          ) : null}
        </motion.div>
      )}
      {letterIndex >= text.length ? (
        <motion.div className="descriptionContainer" variants={descriptionVariants} initial="initial" animate={isInView && "animate"}>
          <p className='txtOrange'>
            <b>I am passionate about crafting innovative digital solutions and thrive on continuous learning to stay ahead in the dynamic tech landscape.</b>
          </p>
          <p>
            Strong academic background, graduating with an honorable mention and achieving the best <span className='txtOrange'>GPA</span> of my generation <span className="txtOrange">(9.9)</span>.
          </p>
          <p>
            Born in <span className='txtOrange'>Mexico</span>, I have developed numerous management, finance, sales, production, and programming support systems for companies, enhancing efficiency and operations.
          </p>
        </motion.div>

      ) : null}

      <motion.div className="essentialsContainer" initial="hidden" animate="visible" whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }} >
        <motion.img
          src="/circle.svg"
          alt=""
          className="circle"
          animate={{ rotate: [0, -5, 0, 5, 0], transition: { duration: 0.5, repeat: Infinity } }}
        />
        <p className="text">essentials</p>
        <motion.img
          src="/arrow.svg"
          alt=""
          className="arrow"
          animate={{ rotate: [0, -5, 0, 5, 0], transition: { duration: 0.5, repeat: Infinity } }}
        />
        {/* <div className="items">
          <motion.img className='icons' src="/spotify.svg" alt="" whileHover={{ scale: 1.2 }} />
          <motion.img className='icons' src="/coffee.svg" alt="" whileHover={{ scale: 1.2 }} />
        </div> */}

      </motion.div>
      <div className="essentialsItems">
        <label className='hoverEffect'><a href={spotifyURL}>actual favorite song</a></label>
        <Spotify wide link={spotifyURL}/>
      </div>
    </motion.div>

  );
}

export default About;
