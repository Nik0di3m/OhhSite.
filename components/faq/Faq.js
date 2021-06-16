import {
    Answer,
    AnswerContainer,
    FaqTitleContainer,
    FirstContainer,
    FirstTitle,
    SecondContainer,
    SecondTitle,
} from "./FaqElements.js";
import { FaqContainer } from "./FaqElements";
import { faqData } from "./Answer.js";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import TextAnimation from "../whyus/TextAnimation";

const Faq = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <FaqContainer>
            <FaqTitleContainer>
                <FirstContainer>
                    <FirstTitle>Jak możemy</FirstTitle>
                </FirstContainer>
                <SecondContainer>
                    <SecondTitle>
                        Wspomóc Twój biznes?
                    </SecondTitle>
                </SecondContainer>
            </FaqTitleContainer>
            <AnswerContainer>
                <TextAnimation
                    text="Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Maecenas et neque vehicula,
                pharetra elit nec, blandit risus. Ut
                hendrerit nulla tortor, quis consectetur
                odio ultrices interdum"
                />
                <TextAnimation
                    text="Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Maecenas et neque vehicula,
                pharetra elit nec, blandit risus. Ut
                hendrerit nulla tortor, quis consectetur
                odio ultrices interdum"
                />
                <TextAnimation
                    text="Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Maecenas et neque vehicula,
                pharetra elit nec, blandit risus. Ut
                hendrerit nulla tortor, quis consectetur
                odio ultrices interdum"
                />
            </AnswerContainer>
        </FaqContainer>
    );
};

export default Faq;
