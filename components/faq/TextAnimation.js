import { AnimationContainer } from "./TextAnimationElements";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const TextAnimation = ({ text }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <AnimationContainer
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
            }}
        >
            <p>{text}</p>
        </AnimationContainer>
    );
};

export default TextAnimation;
