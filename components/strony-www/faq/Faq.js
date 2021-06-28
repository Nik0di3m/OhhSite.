import {
    Answer,
    AnswerContainer,
    FaqTitleContainer,
    FirstContainer,
    FirstTitle,
    SecondContainer,
    SecondTitle,
    AnswerDiv,
    AnswerDivLast,
} from "./FaqElements.js";
import { FaqContainer } from "./FaqElements";
import { faqData } from "./Answer.js";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import TextAnimation from "./TextAnimation";
import Image from "next/image";

const Faq = ({
    title1,
    title2,
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
    answer8,
    answertitle1,
    answertitle2,
    answertitle3,
    answertitle4,
    answertitle5,
    answertitle6,
    answertitle7,
    opis1,
    opis2,
    opis3,
    opis4,
    opis5,
    opis6,
    opis7,
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
                <AnswerDiv>
                    <TextAnimation
                        text={answer1}
                        title={answertitle1}
                        opis={opis1}
                    />
                    <TextAnimation
                        text={answer2}
                        title={answertitle2}
                        opis={opis2}
                    />
                </AnswerDiv>
                <AnswerDiv>
                    <TextAnimation
                        text={answer3}
                        title={answertitle3}
                        opis={opis3}
                    />
                    <TextAnimation
                        text={answer4}
                        title={answertitle4}
                        opis={opis4}
                    />
                </AnswerDiv>
                <AnswerDiv>
                    <TextAnimation
                        text={answer5}
                        title={answertitle5}
                        opis={opis5}
                    />
                    <TextAnimation
                        text={answer6}
                        title={answertitle6}
                        opis={opis6}
                    />
                </AnswerDiv>
                <AnswerDivLast>
                    <TextAnimation
                        text={answer7}
                        title={answertitle7}
                        opis={opis7}
                    />
                    <Image
                        src="/images/stronyWWW2.svg"
                        width="620px"
                        height="300px"
                        alt="content"
                    />
                </AnswerDivLast>
            </AnswerContainer>
        </FaqContainer>
    );
};

export default Faq;
