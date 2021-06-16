import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ImageContainer } from "./AdsElements";
const ImageAnimation = () => {
    const adsImageVariant = {
        hidden: {
            x: -1500,
        },
        visable: {
            x: 0,
            transition: {
                delay: 0.2,
                type: "spring",
            },
        },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <ImageContainer
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
            }}
        >
            <img src="images/vector-creator.svg" />
        </ImageContainer>
    );
};

export default ImageAnimation;
