import styled from "styled-components";
import { motion } from "framer-motion";
export const FaqContainer = styled.div`
    max-width: 1536px;
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0 auto;
    align-items: center;

    @media (max-width: 1440px) {
        max-width: 1230px;
    }
    @media (max-width: 992px) {
        max-width: 95vw;
    }
`;
export const FaqTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    @media (max-width: 992px) {
        width: 100%;
        justify-content: center;
        text-align: center;
    }
`;

export const FirstContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    @media (max-width: 992px) {
        justify-content: center;
    }
`;

export const FirstTitle = styled.h1`
    font-size: 72px;
    @media (max-width: 992px) {
        font-size: 42px;
    }
`;

export const SecondContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 992px) {
        justify-content: center;
    }
`;
export const SecondTitle = styled.h1`
    font-size: 82px;
    margin-top: -5%;
    background-image: linear-gradient(
        -90deg,
        rgba(63, 94, 251, 1) 0%,
        rgba(252, 70, 107, 1) 100%
    );
    background-clip: text;
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    @media (max-width: 1280px) {
        font-size: 72px;
    }
    @media (max-width: 1440px) {
        font-size: 72px;
        word-wrap: normal;
    }
    @media (max-width: 992px) {
        font-size: 42px;
    }
`;
export const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (max-width: 992px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;
export const Answer = styled(motion.div)`
    max-width: 22%;
    p {
        text-align: justify;
    }
    @media (max-width: 992px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;
export const AnswerDiv = styled.div`
    display: flex;
    min-width: 100%;
    justify-content: space-around;
    @media (max-width: 992px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: auto;
    }
`;
