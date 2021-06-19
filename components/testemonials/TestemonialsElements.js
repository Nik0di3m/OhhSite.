import styled from "styled-components";
import { motion } from "framer-motion";

export const TestemonialsWrapper = styled(motion.div)`
    min-height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 55;
    margin-top: 25px;
`;

export const TestemonialsContainer = styled(motion.div)`
    background-image: linear-gradient(
        -90deg,
        rgba(36, 206, 229, 1) 0%,
        rgba(0, 65, 255, 1) 100%
    );
    background-size: 100%;
    background-repeat: repeat;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    padding: 16px;
`;

export const TestemonialsContent = styled(motion.div)`
    width: 50%;
    color: white;
    text-align: center;

    @media (max-width: 992px) {
        width: 95%;
    }
`;

export const TestemonialsClient = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 28px;
`;
export const TestemonialsAvatar = styled.div``;
export const TestemonialsContentContainer = styled(
    motion.div
)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const ClientName = styled.div`
    color: white;
    display: flex;
`;

export const CallToAction = styled(motion.div)`
    position: absolute;
    left: 40%;
    top: 50%;
    color: white;
    z-index: 2;
    @media (max-width: 992px) {
        left: 10%;
    }
`;
