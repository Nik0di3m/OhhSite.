import {
    ContactContainer,
    PlaneAnimation,
    PlaneContainer,
    ContantContent,
    ContactH1,
    ContactP,
    ContactPhoneNumber,
    ContanctButton,
} from "./ContactElements";
import {
    useAnimation,
    AnimatePresence,
} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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
            zIndex: 0,
        },
    };

    const contactContainerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };
    return (
        <ContactContainer ref={ref}>
            <ContantContent
                animate={controls}
                initial="hidden"
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
                variants={contactContainerVariants}
            >
                <ContactH1>Zainteresowany?</ContactH1>
                <ContactP>
                    Jesteśmy do Twojej dyspozycji. Jeżeli
                    masz jakiekolwiek pytania lub chciałbyś
                    poznać wycenę zadzwoń.
                </ContactP>
                <ContactPhoneNumber>
                    987 654 321
                </ContactPhoneNumber>
                <span>lub</span>
                <ContanctButton>Napisz</ContanctButton>
            </ContantContent>
            <PlaneContainer>
                <AnimatePresence>
                    <PlaneAnimation
                        onClick={() =>
                            controls.start("hidden")
                        }
                        animate={controls}
                        initial="hidden"
                        transition={{
                            duration: 1,
                            delay: 0.3,
                        }}
                        variants={animationVariants}
                        exit={{ display: "none" }}
                    >
                        <img src="images/samolocik.svg" />
                    </PlaneAnimation>
                </AnimatePresence>
            </PlaneContainer>
        </ContactContainer>
    );
};

export default Contact;
