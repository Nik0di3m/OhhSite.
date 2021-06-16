import styled from "styled-components";
import { motion } from "framer-motion";
export const AdsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
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
export const ImageContainer = styled(motion.div)`
    @media (max-width: 1280px) {
        img {
            max-width: 500px;
        }
    }
    @media (max-width: 992px) {
        img {
            max-width: 400px;
        }
    }
`;
export const AdsText = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: -15%;
    max-width: 50%;
    @media (max-width: 992px) {
        max-width: 95%;
        justify-content: center;
        align-items: center;
    }
`;
export const AdsTextH1 = styled.h1`
    font-size: 110px;
    text-shadow: 0px 2px 15px 1px rgba(0, 0, 0, 0.72);
    @media (max-width: 1280px) {
        font-size: 98px;
    }
    @media (max-width: 1440px) {
        font-size: 98px;
    }
    @media (max-width: 992px) {
        font-size: 58px;
    }
`;
export const AdsGradient = styled.h1`
    font-size: 110px;
    margin-top: -110px;
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
    @media (max-width: 992px) {
        font-size: 58px;
        margin-top: -10%;
    }
`;
export const TextAds = styled.p`
    margin-top: -10%;
    max-width: 80%;
    @media (max-width: 992px) {
        text-align: center;
    }
`;
export const AdsButton = styled.div``;
