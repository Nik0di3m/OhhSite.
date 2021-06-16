import React from "react";
import {
    WhyUsContainer,
    WhyUsTitle,
    WhyUsTitle2,
    TextContainer,
} from "./WhyUsElements";
import TextAnimation from "./TextAnimation";

const WhyUs = ({
    title1,
    title2,
    answer1,
    answer2,
    answer3,
}) => {
    return (
        <WhyUsContainer>
            <WhyUsTitle>
                {title1}
                <WhyUsTitle2>{title2}</WhyUsTitle2>
            </WhyUsTitle>
            <TextContainer>
                <TextAnimation text={answer1} />
                <TextAnimation text={answer2} />
                <TextAnimation text={answer3} />
            </TextContainer>
        </WhyUsContainer>
    );
};

export default WhyUs;
