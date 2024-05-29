import React from 'react';
import './portfolio.scss';
import { motion, useInView } from 'framer-motion';
import LaptopImage from '../../../public/Laptop.png';

const projects = [
    { id: 1, title: 'Yummi-App', imgSrc: LaptopImage, className: 'first' },
    { id: 2, title: 'Bank Administration Paycheck', imgSrc: LaptopImage, className: 'second' },
    { id: 3, title: 'Clancy', imgSrc: LaptopImage, className: 'third' },
    { id: 4, title: 'Another Project', imgSrc: LaptopImage, className: 'fourth' },
    { id: 5, title: 'X', imgSrc: LaptopImage, className: 'five' },
    { id: 6, title: 'X', imgSrc: LaptopImage, className: 'six' },
];

const ProjectCard = ({ project, index }) => {
    const ref = React.useRef();
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            className={`bento-item ${project.className}`}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="card-content">
                <div className="image-container">
                    <img className='img-content' src={project.imgSrc} alt={project.title} />
                </div>
                <motion.div
                    className="textContainer-port"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2>{project.title}</h2>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Show Me More
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    return (
        <div className="portfolio">
            <motion.div className="text-title">
                <span>My Projects</span>
            </motion.div>
            <div className="bento-container">
                <div className="bento-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
