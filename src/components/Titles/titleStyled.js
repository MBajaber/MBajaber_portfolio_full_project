import styled from 'styled-components';

export const TitleStyled = styled.div`
    margin-bottom: 40px;
    h2 {
        font-size: 2.5rem;
        color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
        text-transform: capitalize;
        font-family: "Rubik", sans-serif;
        font-weight: 700;
        position: relative;
        &::before,
        &::after {
            content: "";
            height: 4px;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: ${({color}) => color};
        }
        &::before {
            width: 50px;
        }
        &::after {
            width: 25px;
            margin-top: 8px;
    }
`;