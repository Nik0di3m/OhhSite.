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
    color: #24cee5;
`;

export const RightTitle = styled.h2`
    color: #24cee5;
`;

export const FooterItem = styled.li`
    text-decoration: none;
    list-style: none;
    color: white;
    text-decoration-color: #24cee5;
    transition: all 200ms ease-in;
    & :hover {
        text-decoration: underline;
        text-decoration-color: #24cee5;
    }
`;

export const FooterCopy = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    font-weight: 200;
`;
export const CompanyInfo = styled.div`
    color: white;
`;
