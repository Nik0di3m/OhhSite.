import styled from "styled-components";
import { motion } from "framer-motion";

export const WhyUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin: 25px;
`;
export const WhyUsTitle = styled.div`
    font-size: 72px;
    display: flex;
    @media (max-width: 992px) {
        font-size: 42px;
    }
`;
export const WhyUsTitle2 = styled.h1`
    font-size: 72px;
    background-image: linear-gradient(
        -90deg,
        rgba(36, 206, 229, 1) 0%,
        rgba(0, 65, 255, 1) 100%
    );
    background-clip: text;
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    @media (max-width: 992px) {
        font-size: 46px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 1536px;

    @media (max-width: 992px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;
