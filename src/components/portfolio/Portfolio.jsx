import React, { useState } from 'react';
import './portfolio.scss';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Json from '../../common/portfolio.json';
import Carousel from './carousel/Carousel';
const projects = Json.projects;

const ProjectCard = ({ project, index }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const ref = React.useRef();
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    return (
        <>
            <motion.div
                className={`bento-item ${project.className}`}
                ref={ref}
                initial={isMobile ? {} : { opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
            >
                <div className="card-content">
                    <div className="image-container">
                        <img className="img-content" src={project.imageViewer} alt={project.name} />
                    </div>
                    <motion.div
                        className="textContainer-port"
                        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2>{project.name}</h2>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={openModal}
                        >
                            Show Me More
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>

            <AnimatePresence>
                {modalIsOpen && (
                    <motion.div
                        className="project-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="close-button" onClick={closeModal}>
                            X
                        </button>

                        <motion.div
                            className="project-modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="carrousel-container">
                                <Carousel images={project.images} />
                            </div>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <div className='slideport'>
                        
                            <motion.img 
                            className='arrow-down' 
                            src="./running-arrow-svgrepo-com.svg" 
                            alt="arrow-down" 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            />
                            </div>
                            <h3>Tech Stack</h3>
                            <ul className="tech-stack">
                                {project.technologies.map((tech, index) => (
                                    <li key={index}>
                                        <img src={tech.icon} alt={tech.name} />
                                        <span>{tech.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <h3>Features</h3>
                            <ul className="features">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
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
