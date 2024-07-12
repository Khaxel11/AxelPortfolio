import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.scss';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('axelaguilaralonso@gmail.com')
      .then(() => {
        toast.success('Email copied to clipboard!', {
          position: isMobile ? "bottom-center" : "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <motion.div
      className='contact'
      variants={variants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className="background-particles" />
      <motion.div className="contact-container" variants={variants}>
        <span>Contact</span>
        <div className='desc-contact'>
          Get in touch with me via social media or email.
          <span>
            <label>Email: </label>
            axelaguilaralonso@gmail.com
          </span>
        </div>

        <motion.ul className="social-disc" variants={variants}>
          <motion.li variants={variants}>
            <a href="https://www.linkedin.com/in/axel-aguilar-328697274/" target="_blank" className="linkedin" rel="noreferrer">
              <img src="./tools/linkedin.svg" alt="LinkedIn" />
            </a>
          </motion.li>
          <motion.li variants={variants}>
            <a href="https://github.com/Khaxel11" target="_blank" className="git" rel="noreferrer">
              <img src="./tools/github.svg" alt="GitHub" />
            </a>
          </motion.li>
          <motion.li variants={variants} className="mail-container">
            <a onClick={copyToClipboard} className="mail">
              <img src="./tools/icons8-gmail-480.svg" alt="Mail" />
            </a>
          </motion.li>
          {/* <motion.li variants={variants}>
            <a href="mailto:axelaguilaralonso@gmail.com" target="_blank" className="mail" rel="noreferrer">
              <img src="./tools/icons8-gmail-480.svg" alt="Mail" />
            </a>
          </motion.li> */}
        </motion.ul>
      </motion.div>
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;

         