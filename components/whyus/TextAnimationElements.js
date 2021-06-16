import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimationContainer = styled(motion.div)`
    width: 22%;
    @media (max-width: 992px) {
        width: 80%;
    }
`;
