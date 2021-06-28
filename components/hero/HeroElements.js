import styled from "styled-components";
import { motion } from "framer-motion";
export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    min-height: calc(100vh - 60px);
    max-width: 1536px;
    margin: 0 auto;

    @media (max-width: 1440px) {
        max-width: 1230px;
    }
    @media (max-width: 1280px) {
        max-width: 1150px;
        justify-content: flex-start;
    }
    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

export const HeroText = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 50%;
    @media (max-width: 992px) {
        margin-top: 80px;
        max-width: 95%;
        justify-content: center;
        align-items: center;
    }
`;

export const HeroTextH1 = styled.h1`
    font-size: 96px;
    @media (max-width: 992px) {
        font-size: 48px;
    }
    @media (max-width: 1440px) and (min-width: 992px) {
        font-size: 62px;
    }
`;

export const HeroGradient = styled.h1`
    font-size: 92px;
    color: #24cee5;
    @media (max-width: 992px) {
        margin-top: -10%;
        font-size: 48px;
    }
    @media (max-width: 1440px) and (min-width: 992px) {
        font-size: 62px;
    }
`;

export const Text = styled.p`
    max-width: 100%;
    @media (max-width: 992px) {
        margin-top: 0;
        text-align: left;
    }
`;

export const HeroButtonContainer = styled.div`
    display: flex;
    font-size: 1.2rem;
    width: 40%;
    justify-content: space-evenly;
    @media (max-width: 992px) {
        justify-content: center;
        width: 100%;
    }
`;

export const HeroButton = styled.div`
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
`;
