import React from "react";
import {
    WhyUsContainer,
    WhyUsTitle,
    WhyUsTitle2,
    TextContainer,
} from "./WhyUsElements";
import TextAnimation from "./TextAnimation";

const WhyUs = () => {
    return (
        <WhyUsContainer>
            <WhyUsTitle>
                Dlaczego
                <WhyUsTitle2>My?</WhyUsTitle2>
            </WhyUsTitle>
            <TextContainer>
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
            </TextContainer>
        </WhyUsContainer>
    );
};

export default WhyUs;
