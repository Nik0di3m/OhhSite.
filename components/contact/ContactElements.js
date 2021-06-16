import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContainer = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    min-height: 45vh;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

export const PlaneContainer = styled.div``;

export const PlaneAnimation = styled(motion.div)`
    position: absolute;
    left: 45%;
`;

export const ContantContent = styled(motion.div)`
    width: 100%;
    background-image: linear-gradient(
        -90deg,
        rgba(63, 94, 251, 1) 0%,
        rgba(252, 70, 107, 1) 100%
    );
    height: 50vh;
    z-index: 90;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    @media (max-width: 992px) {
        text-align: center;
    }
`;
export const ContactH1 = styled.h1`
    font-size: 68px;
    @media (max-width: 992px) {
        font-size: 36px;
    }
`;

export const ContactP = styled.p`
    font-size: 1.2rem;
    @media (max-width: 992px) {
        font-size: 1rem;
    }
`;

export const ContactPhoneNumber = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const ContanctButton = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`;
