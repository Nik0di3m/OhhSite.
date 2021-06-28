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
    color: #24cee5;
    @media (max-width: 992px) {
        font-size: 46px;
    }
`;
export const RealizacjeImages = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 10px;
    grid-template-areas: ". . .";
    @media (max-width: 992px) {
        grid-template-columns: 1fr;
        grid-template-areas: ".";
        gap: 15px;
    }
`;
export const ImgaeOverlay = styled.div`
    position: relative;
    width: 450px;
    height: 250px;
    cursor: pointer;
`;
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    width: 100%;
    height: 100%;
    background-color: #24cee5;
    z-index: 80;
    opacity: 0.8;
    transition: all 200ms ease-in;
    & :hover {
        opacity: 0;
    }
    p {
        opacity: 1;
    }
`;
