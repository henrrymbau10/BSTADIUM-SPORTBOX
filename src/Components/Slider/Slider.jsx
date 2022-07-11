import React, { useState, useEffect, useRef } from 'react';
import './Slider.scss'
import { motion } from "framer-motion"
import image1 from "../../Assets/Desktop/image1.png";
import image2 from "../../Assets/Desktop/image2.png";
import image3 from "../../Assets/Desktop/image3.png";
import image5 from "../../Assets/Desktop/image5.png";
import image6 from "../../Assets/Desktop/image6.png";


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
                    </motion.div>
                    <motion.div className="item">
                        <img src={image2} alt="dos" />
                    </motion.div>
                    <motion.div className="item">
                        <img src={image3} alt="tres" />
                    </motion.div>
                    <motion.div className="item">
                        <img src={image5} alt="cinco" />
                    </motion.div>
                    <motion.div className="item">
                        <img src={image6} alt="seis" />
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