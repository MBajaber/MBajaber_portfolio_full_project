import styled from 'styled-components';

export const LayoutStyled = styled.div`
    position: fixed;
    left: 270px;
    background-color: ${({themeStyle , theme}) => themeStyle[theme].bodyColor};
    min-height: 100vh;
    padding: 0 30px;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all .3s ease-in-out;
    @media (max-width: 1199px) {
        left: 0px;
        &.open {
            padding-left: 270px;
        }
    }
    @media (max-width: 500px) {
        &.open {
            padding-left: 0;
        }
    }
    & > div {
        position: relative;
        padding: 30px 30px 70px;
        padding-top: 30px;
        padding-bottom: 70px;
        max-width: 1100px;
        min-height: 100vh;
        margin: auto;
        @media (max-width: 1199px) {
            padding-top: 60px;
        }
    }
    & > .loader {
        padding: 0;
        max-width: 0;
        min-height: 0;
        margin: 0;
    }
`;