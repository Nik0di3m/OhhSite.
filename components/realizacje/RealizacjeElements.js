import styled from "styled-components";
import { motion } from "framer-motion";
export const ReallizacjeContainer = styled.div`
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
    }
    @media (max-width: 992px) {
        flex-direction: column;
    }
`;
export const RealizacjeWrapper = styled.div``;
export const RealizacjeTitle = styled(motion.h1)`
    font-size: 110px;
    text-align: center;
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
export const RealizacjeSlider = styled.div``;
