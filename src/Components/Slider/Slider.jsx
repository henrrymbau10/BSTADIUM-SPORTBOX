import React, { useState, useEffect, useRef } from 'react';
import './Slider.scss'
import { motion } from "framer-motion"
import image1 from "../../Assets/Desktop/1-Entradas-exclusivas-y-Fan-Zones.jpg";
import image2 from "../../Assets/Desktop/2Eventos-corporativos.jpg";
import image3 from "../../Assets/Desktop/3Entrena-como-la-Seleccion.jpg";
import image4 from "../../Assets/Desktop/4Entrenamientos-o-actividades grupales.jpg";
import image5 from "../../Assets/Desktop/5Tours-interactivos-por estadios-y-planes-de-ocio.jpg";
import image6 from "../../Assets/Desktop/6Experiencias-interactivas.jpg";
import image7 from "../../Assets/Desktop/7Tours-originales-alrededor-del-fútbol.jpg";
import image8 from "../../Assets/Desktop/8Matchday-Experience.png";


function Slider() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel-text">
                <h1>PORQUE EL FÚTBOL ES MUCHO MÁS QUE FÚTBOL</h1>
                <p>Utiliza nuestras experiencias como palanca comercial</p>
            </div>
            <motion.div ref={carousel} className="carousel">
                <motion.div className="inner-carousel"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}>
                    <motion.div className="item">
                        <img src={image1} alt="uno" />
                        <h2 className="text-video">Tour interactivos + planes de ocio</h2>
                        
                    </motion.div>
                    <motion.div className="item">
                        <img src={image2} alt="dos" />
                        <h2 className="text-video">Tour interactivos + planes de ocio</h2>
                        
                    </motion.div>
                    <motion.div className="item">
                        <img src={image3} alt="tres" />
                        <h2 className="text-video">Tour interactivos + planes de ocio</h2>
                        
                    </motion.div>
                    <motion.div className="item">
                        <img src={image4} alt="cinco" />
                        <h2 className="text-video">Tour interactivos + planes de ocio</h2>
                        
                    </motion.div>
                    <motion.div className="item">
                        <img src={image5} alt="seis" />
                        <h2 className="text-video">Tour interactivos + planes de ocio</h2>
                        
                    </motion.div>
                    <motion.div className="item">
                        <img src={image6} alt="seis" />
                        <h2 className="text-video">Tour interactivos + planes de ocio</h2>
                        
                    </motion.div>
                    <motion.div className="item">
                        <img src={image7} alt="seis" />
                        <h2 className="text-video">Tour interactivos + planes de ocio</h2>
                        
                    </motion.div>
                    <motion.div className="item">
                        <img src={image8} alt="seis" />
                        <h2 className="text-video">Tour interactivos + planes de ocio</h2>
                        
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Slider

// {images.map(image => {
//     return (
//         <motion.div className="item">
//             <img src={image} alt="imgcarousel" />
//         </motion.div>
//     );
// })}