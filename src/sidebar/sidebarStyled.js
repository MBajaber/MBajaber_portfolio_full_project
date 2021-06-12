import styled from 'styled-components';

export const SidebarStyled = styled.div`
    max-width: 270px;
    background-color: ${({themeStyle , theme}) => themeStyle[theme].sidebarBgColor};
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    border: 1px solid ${({themeStyle , theme}) => themeStyle[theme].borderColor};
    padding: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    @media (max-width: 1199px) {
        left: -270px;
        &.open {
            left: 0px;
        }
    }
    .logo a {
        display: inline-block;
        font-family: "Rubik", sans-serif;
        font-size: 2.5rem;
        font-weight: 900;
        color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
        padding: 0 10px;
        position: relative;
        line-height: 50px;
        text-transform: capitalize;
        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
        }
        &::before {
            top: 0;
            left: 0;
            border-top: 4px solid ${({color}) => color};
            border-left: 4px solid  ${({color}) => color};
        }
        &::after {
            bottom: 0;
            right: 0;
            border-bottom: 4px solid ${({color}) => color};
            border-right: 4px solid ${({color}) => color};
        }
    }
    .nav-toggle {
        height: 40px;
        width: 40px;
        border-radius: 5px;
        border: 1px solid #d4d4e3;
        cursor: pointer;
        position: fixed;
        top: 20px;
        left: 300px;
        z-index: 11;
        background-color: #fdf9ff;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: none;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        &.open {
            left: 222px;
            span {
                background-color: transparent;
                -webkit-transition: all 0.5s ease-in-out;
                transition: all 0.5s ease-in-out;
                &::before {
                    -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
                    top: 0;
                    -webkit-transition: all 0.5s ease-in-out;
                    transition: all 0.5s ease-in-out;
                }
                &::after {
                    -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    top: 0;
                    -webkit-transition: all 0.5s ease-in-out;
                    transition: all 0.5s ease-in-out;
                }
            }
            @media (max-width: 1199px) {
                left: 222px;
            }
        }
        @media (max-width: 1199px) {
            display: flex;
            display: -ms-flexbox;
            left: 30px;
        }
        span {
            height: 2px;
            width: 18px;
            display: inline-block;
            position: relative;
            background-color: ${({color}) => color};
            &::before,
            &::after {
            content: "";
            position: absolute;
            left: 0;
            height: 2px;
            width: 18px;
            background-color: ${({color}) => color};
            }
            &::before {
                top: -6px;
            }
            &::after {
                top: 6px;
            }
        }
    }
    .nav {
        margin-top: 20px;
        padding: 0;
        list-style-type: none;
        li {
            &:not(:last-of-type) {
                border-bottom: 1px solid ${({themeStyle , theme}) => themeStyle[theme].borderColor};
            }
            .navLinkLink {
                display: flex;
                align-items: center;
                text-transform: capitalize;
                line-height: 45px;
                font-weight: 600;
                color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
                -webkit-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;
                &.active {
                    color: ${({color}) => color};
                }
                &:not(.active):hover {
                    padding-left: 5px;
                }
                svg {
                    margin-right: 10px;
                }
                &:hover {
                    color: ${({color}) => color};
                }
            }
        }
    }
    .section {
        margin-top: 20px;
        h5 {
            font-size: 14px;
            font-family: "Rubik", sans-serif;
            font-weight: bold;
            color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
            margin-bottom: 8px;
            padding-bottom: 5px;
            text-transform: capitalize;
        }
    }
    .choose_color .choose_color_list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 85%;
        margin: auto;
        & > li {
            border-radius: 50%;
            cursor: pointer;
            position: relative;
            height: 25px;
            width: 25px;
            transition: all .3s ease-in-out;
            &:hover {
                transform: scale(1.1);
            }
            &::before {
                content: "";
                position: absolute;
                border-radius: 50%;
                width: 100%;
                height: 100%;
                filter: blur(5px);
                z-index: -1;
            }
            &:first-of-type,
            &:first-of-type::before {
                background-color: #ec1839;       
            }
            &:nth-of-type(2),
            &:nth-of-type(2)::before {
                background-color: #2196f3;
            }
            &:nth-of-type(3),
            &:nth-of-type(3)::before {
                background-color: #fa5b0f;
            }
            &:nth-of-type(4),
            &:nth-of-type(4)::before {
                background-color: #ffb400;
            }
            &:last-of-type,
            &:last-of-type::before {
                background-color: #72b626;
            }
        }
    }
    .choose_theme form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 70%;
        margin: auto;
        .form_group {
            display: flex;
            align-items: center;
            input {
                margin-right: 5px;
                user-select: none;
            }
            label {
                text-transform: capitalize;
                font-size: 15px;
                font-family: "Rubik", sans-serif;
                color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
                user-select: none;
            }
        }
    }
    .copyright {
        margin-top: 40px;
        font-size: 0.8rem;
        color: #7d7d7d;
    }
`;