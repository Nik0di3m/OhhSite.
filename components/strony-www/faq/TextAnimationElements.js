import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimationContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    flex: 0.3;
    @media (max-width: 992px) {
        p {
            width: 50%;
        }
        word-wrap: break-word;
    }
`;
export const Answer = styled.div`
    @media (max-width: 992px) {
        width: 100%;
    }
`;
export const Opis = styled.div`
    p {
        width: 100%;
    }
`;
