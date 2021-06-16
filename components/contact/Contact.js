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

const Contact = ({ title, text, phone, mail }) => {
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
                <ContactH1>{title}</ContactH1>
                <ContactP>{text}</ContactP>
                <ContactPhoneNumber>
                    {phone}
                </ContactPhoneNumber>
                <span>lub</span>
                <ContanctButton>{mail}</ContanctButton>
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
