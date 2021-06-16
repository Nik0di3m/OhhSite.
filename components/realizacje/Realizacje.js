import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
    ReallizacjeContainer,
    RealizacjeWrapper,
    RealizacjeTitle,
    RealizacjeSlider,
} from "./RealizacjeElements";
import Slider from "./Slider";

const Realizacje = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <ReallizacjeContainer>
            <RealizacjeWrapper>
                <RealizacjeTitle
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                >
                    Realizacje
                </RealizacjeTitle>
                <RealizacjeSlider>
                    <Slider />
                </RealizacjeSlider>
            </RealizacjeWrapper>
        </ReallizacjeContainer>
    );
};

export default Realizacje;
