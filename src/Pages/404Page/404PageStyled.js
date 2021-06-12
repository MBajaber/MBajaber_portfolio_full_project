import styled from 'styled-components';

export const PageNotFoundStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .img-box {
        width: 70%;
        text-align: center;
        @media(max-width: 800px) {
            width: 80%
        }
        @media(max-width: 500px) {
            width: 100%;
        }
        img {
            max-width: 100%;
        }
        h3 {
            margin-top: 30px;
            font-size: 2.5rem;
            font-weight: bold;
            color: ${({themeStyle, theme}) => themeStyle[theme].pramiaryTextColor};
            font-family: "Rubik", sans-serif;
            @media(max-width: 800px) {
                font-size: 2rem;
            }
            @media(max-width: 400px) {
                font-size: 1.5rem;
            }
        }
    }
`; 