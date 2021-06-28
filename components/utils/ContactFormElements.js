import styled from "styled-components";
import { motion } from "framer-motion";

export const FormConteiner = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0 auto;
    width: 45%;
    @media (max-width: 992px) {
        width: 95vw;
    }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (max-width: 992px) {
        width: 95vw;
        margin-top: 25%;
    }
`;

export const Label = styled.label`
    display: black;
    margin-bottom: 0.2em;
`;
export const Input = styled.input`
    background-color: #2b2b2b;
    border: none;
    padding: 6px;
    color: white;
    font-family: inherit;
    border-radius: 20px;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    margin-bottom: 8px;
`;
export const TextArea = styled.textarea`
    background-color: #2b2b2b;
    border: none;
    padding: 6px;
    border-radius: 20px;
    color: white;
    font-family: inherit;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    margin-bottom: 8px;
    height: 300px;
    resize: none;
`;
export const ButtonEmail = styled.button`
    background-color: #2b2b2b;
    border: none;
    padding: 4px;
    border-radius: 20px;
    color: white;
    font-family: inherit;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    cursor: pointer;
`;
export const Select = styled.select`
    background-color: #2b2b2b;
    border: none;
    padding: 4px;
    border-radius: 20px;
    color: white;
    font-family: inherit;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    margin-bottom: 8px;
`;
export const Option = styled.option``;
