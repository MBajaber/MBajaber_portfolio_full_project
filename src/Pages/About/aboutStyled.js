import styled from 'styled-components';

export const AboutStyled = styled.div`
    .about-text {
        h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            font-weight: bold;
            color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
            span {
                color: ${({color}) => color};
            }
        }
        p {
            font-size: 1rem;
            line-height: 25px;
            color: ${({themeStyle , theme}) => themeStyle[theme].secondaryTextColor};
        }
    }
    .section-title {
        font-family: "Rubik", sans-serif;
        color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
        text-transform: capitalize;
        font-weight: 700;
        margin-bottom: 40px;
        font-size: 1.5rem;
        margin-top: 40px;
    }
    .person-info {
        .skills {
            max-width: 450px;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
            grid-gap: 20px;
            place-items: center;
            .image {
                img {
                    width: 100px;
                }
                &.react img {
                    width: 140px;
                }
                &.html img {
                    width: 75px;
                }
                &.javaScript img {
                    width: 140px;
                }
                &.git img {
                    width: 120px;
                }
            }
        }
        .personal_info {
            .info_list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 15px 40px;
                margin: 0px auto;
                max-width: 580px;
                @media (max-width: 650px) {
                    grid-template-columns: repeat(1, 1fr);
                }
                li {
                    text-transform: capitalize;
                    font-weight: 600;
                    padding: 10px 0;
                    color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
                    border-bottom: 1px solid ${({themeStyle , theme}) => themeStyle[theme].borderColor};
                    word-break: break-all;
                    &.email {
                        text-transform: lowercase;
                    }
                    span {
                        font-weight: 400;
                        color: ${({themeStyle , theme}) => themeStyle[theme].secondaryTextColor};
                        margin-left: 10px;
                    }
                }
            }
            .about_btn_links {
                max-width: 350px;
                margin-top: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                a {
                    background-color: ${({color}) => color};
                    margin: 10px;
                    border: 0;
                    padding: 12px 35px;
                    border-radius: 40px;
                    cursor: pointer;
                    color: #fff;
                    text-transform: capitalize;
                    font-weight: bold;
                    font-size: 1rem;
                    font-family: "Rubik", sans-serif;
                    white-space: nowrap;
                    -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                }
            }
        }
    }
    .education {
        .education-content {
            background-color: ${({themeStyle , theme}) => themeStyle[theme].sidebarBgColor};
            padding: 30px 15px;
            border: 1px solid ${({themeStyle , theme}) => themeStyle[theme].borderColor};
            border-radius: 10px;
            width: 100%;
            position: relative;
            -webkit-box-shadow: 0 0 20px rgb(48 46 77 / 15%);
            box-shadow: 0 0 20px rgb(48 46 77 / 15%);
            .timeline-item {
                position: relative;
                padding-left: 37px;
                padding-bottom: 50px;
                &::before {
                    content: "";
                    width: 1px;
                    position: absolute;
                    height: 100%;
                    left: 7px;
                    top: 0;
                    background-color: ${({color}) => color};
                }
            }
            .circle-dot {
                position: absolute;
                left: 0px;
                top: 0;
                height: 15px;
                width: 15px;
                border-radius: 50%;
                background-color: ${({color}) => color};
            }
            .timeline-date {
                font-size: 0.9rem;
                font-weight: 400;
                margin-bottom: 12px;
                color: ${({themeStyle , theme}) => themeStyle[theme].secondaryTextColor};
                display: flex;
                align-items: center;
                svg {
                    margin-right: 10px;
                }
            }
            .timeline-title {
                font-weight: 700;
                font-size: 1.2rem;
                margin-bottom: 15px;
                text-transform: capitalize;
                color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
            }
            .timeline-text {
                font-size: 1rem;
                line-height: 25px;
                color: ${({themeStyle , theme}) => themeStyle[theme].secondaryTextColor};
            }
        }
    }
`;