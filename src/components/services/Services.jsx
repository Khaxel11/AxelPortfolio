import { useRef, useEffect } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
    initial: {
        x:-500,
        y: 100,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity : 1,
        y : 0,
        transition:{
            duration : 1,
            staggerChildren: 0.1,
        }
    }
}
const variantsMobile = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};
const Services = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {margin:"-100px"});
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    useEffect(() => {
        console.log(isMobile)
      }, [isMobile])
  return (
    
    <motion.div
            className="services"
            variants={isInView && isMobile ? variantsMobile :  isInView && !isMobile ?  variants : variantsMobile}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            ref={ref}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on combining technical knowledge<br /> with creativity to craft solutions and experiences</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants} animate="animate">
                <motion.div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color: "#ffa500"}}>Unique</motion.b> Ideas</h1>
                </motion.div>
                <motion.div className="title">
                <h1>Fast <motion.b whileHover={{color: "#ffa500"}}b>Learning</motion.b></h1>
                </motion.div>
                <motion.div className="title">
                <h1>Fast <motion.b whileHover={{color: "#ffa500"}}b>Adaptability</motion.b></h1>
                <button>Know More</button>
                </motion.div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{backgroundColor: "#808080", color: "#000000"}}>
                    <h2>Programming Languages</h2>
                    <p>TypeScript</p>
                    <p>JavaScript</p>
                    <p>C#</p>
                    <p>JAVA</p>
                    <p>Visual Basic</p>
                    <button>Learn More</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor: "#808080", color: "#000000"}}>
                    <h2>Web Development</h2>
                    <p>HTML</p>
                    <p>CSS / SCSS</p>
                    <p>Angular</p>
                    <p>React</p>
                    <p>Learning Tailwind!</p>
                    <button>Learn More</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor: "#808080", color: "#000000"}}>
                    <h2>Mobile Development</h2>
                    <p>Ionic</p>
                    <p>Android JAVA</p>
                    <button>Learn More</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor: "#808080", color: "#000000"}}>
                    <h2>Database Managment</h2>
                    <p>SQL Server / T-SQL</p>
                    <p>MySQL</p>
                    <p>MongoDB (Basic)</p>
                    <p>Firebase (Basic)</p>
                    <button>Learn More</button>
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default Services