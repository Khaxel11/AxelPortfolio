import Sidebar from "../sidebar/sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          >
            Axel Aguilar
        </motion.span>
        <motion.div className="social" initial={{ x: 50, scale: 0.5 }} 
          animate={{ x: 0, scale: 1 }} 
          transition={{ duration: 0.5 }}>
            
          <motion.a href="https://github.com/Khaxel11" whileHover={{scale: 1.5}}>
            {/* <img src={'/tools/github.svg'} alt={'gitHub'} /> */}
            <motion.div className="imageContainer"
              initial={{ x: 500}} 
              animate={{ x: 0 }} 
              transition={{ duration: 0.8 }}
              >
                <img  src={'./tools/github.svg'} alt={'Git'} />
            </motion.div>
            </motion.a>
          <motion.a href="https://www.linkedin.com/in/axel-aguilar-alonso/" whileHover={{scale: 1.2}}>
            {/* <img src={'/tools/linkedin.svg'} alt={'linkedin'} /> */}
            <motion.div className="imageContainer"
              initial={{ x: 500}} 
              animate={{ x: 0 }} 
              transition={{ duration: 0.8 }}
              >
                <img  src={'./tools/linkedin.svg'} alt={'Linkedin'} />
            </motion.div>
            </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar