import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const FooterContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`;
export const LeftSideFooter = styled.div``;
export const CenterFooter = styled.div`
    @media (max-width: 992px) {
        display: none;
    }
`;
export const RightSideFooter = styled.div`
    @media (max-width: 992px) {
        display: none;
    }
`;

export const CenterTitle = styled.h2`
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

export const RightTitle = styled.h2`
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
`;

export const FooterItem = styled.li`
    text-decoration: none;
    list-style: none;
    color: white;
`;

export const FooterCopy = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    font-weight: 200;
`;
