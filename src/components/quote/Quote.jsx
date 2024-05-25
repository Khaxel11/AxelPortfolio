import { motion } from 'framer-motion';
import './quote.scss';

const Quote = () => {
  return (
    <div className='quote'>
      <div className="quote-container">
        <motion.img 
          className='quote-up' 
          src="../../../public/quote-up.svg" 
          alt="quote-up" 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.img 
          className='quote-down' 
          src="../../../public/quote-down.svg" 
          alt="quote-down" 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <motion.div 
        className="quote-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="quote-text">
          <p>
            “The beginning of purpose is found in
          </p>
          <p>
            creating something that only you understand.”
          </p>
        </div>
        <div className="quote-author">
          <p>
            - Tyler Joseph
          </p>
        </div>
      </motion.div>
      <motion.div 
        className="contact-me"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.p
          animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          contact me
        </motion.p>
         <motion.img 
          className='arrow-down-small' 
          src="../../../public/running-arrow-svgrepo-com.svg" 
          alt="arrow-down" 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.img 
          className='arrow-down' 
          src="../../../public/running-arrow-svgrepo-com.svg" 
          alt="arrow-down" 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
          
        
      </motion.div>
    </div>
  );
}

export default Quote;
