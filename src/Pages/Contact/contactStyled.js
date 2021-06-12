import styled from'styled-components';

export const ContactStyled = styled.div`
    .content_info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 30px 15px;
        @media (max-width: 350px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .content_info_item {
            text-align: center;
            .icon {
                margin-bottom: 25px;
            }
            h4 {
                font-size: 1.1rem;
                font-weight: 700;
                color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
                text-transform: capitalize;
                margin-bottom: 10px;
            }
            p {
                font-weight: 400;
                color: ${({themeStyle , theme}) => themeStyle[theme].secondaryTextColor};
                line-height: 25px;
                margin-bottom: 5px;
            }
        } 
    }
    .social {
        margin-top: 25px;
        text-align: center;
        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            h4 {
                font-size: 1.3rem;
                color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
                font-family: "Rubik", sans-serif;
                font-weight: 700;
                margin: 0 16px;
            }
            svg {
                margin-top: 10px;
                color: #f09617;
            }
        }
        .social_icons {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .3s ease-in-out;
            margin-top: 40px;
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
                transition: all 0.3s ease-in-out;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
`;