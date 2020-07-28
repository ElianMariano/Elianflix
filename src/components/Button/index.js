import styled from "styled-components";

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursos: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-wheight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    translation: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default Button;