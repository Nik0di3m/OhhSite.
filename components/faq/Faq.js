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

const Faq = ({
    title1,
    title2,
    answer1,
    answer2,
    answer3,
}) => {
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
                    <FirstTitle>{title1}</FirstTitle>
                </FirstContainer>
                <SecondContainer>
                    <SecondTitle>{title2}</SecondTitle>
                </SecondContainer>
            </FaqTitleContainer>
            <AnswerContainer>
                <TextAnimation text={answer1} />
                <TextAnimation text={answer2} />
                <TextAnimation text={answer3} />
            </AnswerContainer>
        </FaqContainer>
    );
};

export default Faq;
