import { Animation } from "./PlaneAnimationElements";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const PlaneAnimation = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const animationVariants = {
        hidden: {
            x: -500,
            y: 500,
        },
        visible: {
            x: 0,
            y: 0,
        },
    };

    return (
        <Animation
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={animationVariants}
        >
            <img src="images/samolocik.svg" />
        </Animation>
    );
};

export default PlaneAnimation;
