import styled from "styled-components";
import { motion } from "framer-motion";
export const FourContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    min-height: 60vh;
    flex-direction: column;
`;
export const FourH1 = styled.h1``;

export const FourButton = styled(motion.div)`
    cursor: pointer;
    display: flex;
    font-size: 36px;
    border: 2px solid #21c4e7;
    padding: 8px;
    border-radius: 20px;
`;
