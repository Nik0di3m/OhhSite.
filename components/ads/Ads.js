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
const Ads = () => {
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
                <AdsTextH1>Reklama w</AdsTextH1>
                <AdsGradient>Internecie</AdsGradient>
                <TextAds>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Donec ut semper ex.
                    Nulla viverra vehicula massa. In
                    fringilla enim nunc, sit amet tristique
                    orci interdum eu. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                    Suspendisse semper mi vitae ex
                    imperdiet, vel iaculis sapien bibendum.
                    Aliquam ut ultricies diam.
                </TextAds>
                <AdsButton>Czytaj więcej ...</AdsButton>
            </AdsText>
        </AdsContainer>
    );
};

export default Ads;
