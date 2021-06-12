import styled from 'styled-components';

export const HomeStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .intro {
        text-align: center;
        .my-photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 8px solid #fff;
            max-width: 100%;
        }
        h2 {
            text-transform: capitalize;
            font-size: 1.9rem;
            color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
            font-family: "Rubik", sans-serif;
            font-weight: 700;
            margin: 20px 0 5px;
        }
        p {
            color: ${({themeStyle , theme}) => themeStyle[theme].secondaryTextColor};
            font-weight: 500;
            margin: 20px 0 5px;
            line-height: 22px;
        }
        .social_icons {
            margin-top: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 35px;
                height: 35px;
                line-height: 35px;
                text-align: center;
                border-radius: 50%;
                color: #fff;
                margin: 0 8px;
                -webkit-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;
                &:hover {
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }
            }
        }
    }
`;