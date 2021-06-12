import styled, { keyframes } from 'styled-components';

const showItem = keyframes`
    0% {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`

const showPopup = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(0);
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
    }
`

export const PortfolioStyled = styled.div`
    .list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
        @media (max-width: 380px) {
            display: block;
        }
        .list_link {
            border: none;
            background-color: transparent;
            font-size: 1.1rem;
            font-weight: 700;
            text-transform: capitalize;
            margin: 5px 10px;
            color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
            cursor: pointer;
            border-bottom: 2px solid transparent;
            white-space: nowrap;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            &.active {
                color: ${({color}) => color};
            }
            @media (max-width: 380px) {
                display: block;
                margin: 13px auto;
            }
        }
    }
    .portfolio-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 15px;
        @media (max-width: 450px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .gallery-item {
            background-color: #fdf9ff;
            border: 6px solid #fdf9ff;
            height: 300px;
            border-radius: 10px;
            -webkit-box-shadow: 0 0 20px rgb(48 46 77 / 15%);
            box-shadow: 0 0 20px rgb(48 46 77 / 15%);
            animation: ${showItem} 0.5s ease-in-out;
            .gallery-image {
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                overflow: hidden;
                position: relative;
                height: 85%;
                border: 1px solid #eee;
                z-index: 2;
                .black_popup {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    opacity: 0;
                    -webkit-transition: all 0.4s ease-in-out;
                    transition: all 0.4s ease-in-out;
                    color: #fff;
                    h4 {
                        font-size: 1.1rem;
                        font-weight: 700;
                        text-transform: capitalize;
                        position: absolute;
                        top: 20px;
                        left: -100vw;
                        -webkit-transition: all 0.5s 0.3s ease-in-out;
                        transition: all 0.5s 0.3s ease-in-out;
                        font-family: "Rubik", sans-serif;
                    }
                    svg {
                        position: absolute;
                        bottom: 20px;
                        right: -100vw;
                        -webkit-transition: all 0.5s 0.3s ease-in-out;
                        transition: all 0.5s 0.3s ease-in-out;
                        &:hover {
                            transform: scale(1.2);
                            -webkit-transition: all 0.3s ease-in-out;
                            transition: all 0.3s ease-in-out;
                        }
                    }
                }
                &:hover .black_popup {
                    opacity: 1;
                    cursor: pointer;
                }
                &:hover .black_popup h4 {
                    left: 20px;
                }
                &:hover .black_popup > svg {
                    right: 20px;
                }
                img {
                    max-width: 100%;
                }                  
            }
            .icon-svg {
                position: relative;
                margin-top: 10px;
                height: 15%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1;
                a {
                    margin: 0 10px;
                    color: ${({color}) => color};
                    &.github_link,
                    &.website_link {
                        position: absolute;
                        top: -60px;
                        opacity: 0;
                    }
                    &.github_link {
                        left: 40%;
                        transform: translateX(-50%);
                        transition: all 0.3s 0.3s ease-in-out;
                        @media (max-width: 400px) {
                            left: 35%;
                        }
                    }
                    &.website_link {
                        left: 55%;
                        transform: translateX(-50%);
                        transition: all 0.3s 0.5s ease-in-out;
                        @media (max-width: 400px) {
                            left: 60%;
                        }
                    }
                }
            }
            &:hover .icon-svg .github_link,
            &:hover .icon-svg .website_link {
                top: 0px;
                opacity: 1;
            }
        }
    }
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        cursor: pointer;
        z-index: 15;
        user-select: none;
        transition: all 0.4s ease-in-out;
        .popup-section {
            width: 700px;
            height: 350px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 10px;
            border-radius: 10px;
            background-color: #fff;
            transition: all 0.3s ease-in-out;
            animation: ${showPopup} 0.5s ease-in-out;
            @media (max-width: 1199px) {
                width: 500px;    
            }
            @media (max-width: 600px) {
                width: 70%;
            }
            .close_btn {
                position: absolute;
                top: -22px;
                right: -50px;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background-color: #fff;
                color: #dc3545;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 0px 10px 2px rgb(255 255 255);
                overflow: hidden;
                user-select: none;
                @media (max-width: 600px) {
                    width: 30px;
                    height: 30px;
                    top: -17px;
                    right: -16px;
                }
                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
            .popup_box {
                overflow-y: auto;
                width: 100%;
                height: 100%;
                img {
                    max-width: 100%;
                }
            }
            h4 {
                color: #fff;
                margin: -30px 0;
                transition: all 0.3s 0.5s ease-in-out;
                font-family: "Rubik", sans-serif;
                font-size: 1.2rem;
            }
        }
        &:hover .popup-section h4 {
            margin: 20px 0;
        }
    }
`;