import styled from 'styled-components';

export const ServicesListStyled = styled.div`
    background-color: ${({themeStyle , theme}) => themeStyle[theme].sidebarBgColor};
    border: 1px solid ${({themeStyle , theme}) => themeStyle[theme].borderColor};
    border-radius: 10px;
    padding: 30px 15px;
    text-align: center;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    width: 100%;
    &:hover {
        -webkit-box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
        box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
    }
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        margin: 0 auto 20px;
        text-align: center;
        border-radius: 50%;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        svg {
            font-size: 2.5rem;
            line-height: 60px;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            color: ${({color}) => color};
        }
    }
    &:hover .icon {
        background-color: ${({color}) => color};
    }
    &:hover .icon svg {
        font-size: 1.5rem;
        color: #fff;
    }
    h4 {
        font-size: 1.1rem;
        margin-bottom: 15px;
        color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
        font-weight: bold;
    }
    p {
        font-size: 1rem;
        color: ${({themeStyle , theme}) => themeStyle[theme].secondaryTextColor};
    }
`;