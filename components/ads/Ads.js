import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
    AdsButton,
    AdsContainer,
    AdsGradient,
    AdsText,
    AdsTextH1,
    TextAds,
} from "./AdsElements";
import ImageAnimation from "./ImageAnimation";
const Ads = ({ title1, title2, text }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <AdsContainer>
            <ImageAnimation />
            <AdsText
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                }}
            >
                <AdsTextH1>{title1}</AdsTextH1>
                <AdsGradient>{title2}</AdsGradient>
                <TextAds>{text}</TextAds>
                <AdsButton>Czytaj więcej ...</AdsButton>
            </AdsText>
        </AdsContainer>
    );
};

export default Ads;
