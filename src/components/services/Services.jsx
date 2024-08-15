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
            <motion.div className="text-container" variants={variants}>
                <p>I focus on combining technical knowledge<br /> with creativity to craft solutions and experiences</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants} animate="animate">
                <motion.div className="title">
                    <img className='service-image' src="./spaceapps.jpg" alt="" />
                    <h1><motion.b whileHover={{color: "#ea412a"}}>Unique</motion.b> Ideas</h1>
                </motion.div>
                <motion.div className="title">
                <h1>Fast <motion.b whileHover={{color: "#ea412a"}}b>Learning</motion.b></h1>
                </motion.div>
                <motion.div className="title">
                <h1>Fast <motion.b whileHover={{color: "#ea412a"}}b>Adaptability</motion.b></h1>
                {/* <button>Know More</button> */}
                </motion.div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{backgroundColor: "#1a1a1a", color: "#000000"}}>
                    <h2>Soft Skills</h2>
                    <p><b>● </b>Leadership and Teamwork</p>
                    <p><b>● </b>Communication</p>
                    <p><b>● </b>Creativity and Innovation</p>
                    <p><b>● </b>Problem Solving and Critical Thinking</p>
                    <p><b>● </b>Continuous Learning</p>
                    {/* <button>Learn More</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor: "#1a1a1a", color: "#000000"}}>
                    <h2>Languages</h2>
                    <p><b>● </b>Spanish <b>(Native)</b></p>
                    <p><b>● </b>English <b>(C1)</b></p>
                    <p><b>● </b>French <b>(A1)</b></p>
                    
                
                    {/* <button>Learn More</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor: "#1a1a1a", color: "#000000"}}>
                    <h2>Awards</h2>
                    <p><b>● </b>Hightest GPA in ITSON <a > (Score 99)</a></p>
                    <p><b>● </b>Academic Merit in Engineering<a href="https://www.itson.mx/Lists/Noticias/DispForm.aspx?ID=4570&ContentTypeId=0x0104004DA3B718FBF0C6419EA99C9ECEC963DC"> (MAI)</a></p>
                    <p><b>● </b>Valuable Participation in <a href="https://diariodelyaqui.mx/sonora/exitoso-evento-de-nasa/22876">NASA SPACE APPS CHALLENGE 2019</a></p>
                    {/* <button>Learn More</button> */}
                </motion.div>
                {/* <motion.div className="box" whileHover={{backgroundColor: "#3b3b3b", color: "#000000"}}>
                    <h2>Personal Information</h2>
                    <p><b>● </b>I ♥ Coffee</p>
                    <p><b>● </b>I ♥ Code and Music</p>
                    
                    <button>Learn More</button>
                </motion.div> */}

            </motion.div>
        </motion.div>
    )
}

export default Services