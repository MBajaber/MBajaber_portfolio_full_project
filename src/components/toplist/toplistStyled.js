import styled from 'styled-components';

export const TopListStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${({themeStyle , theme}) => themeStyle[theme].borderColor};
    width: 100%;
    background-color: ${({themeStyle , theme}) => themeStyle[theme].sidebarBgColor};
    -webkit-box-shadow: 0 0 20px rgb(48 46 77 / 15%);
    box-shadow: 0 0 20px rgb(48 46 77 / 15%);
    .info {
        .top-img {
            position: relative;
            overflow: hidden;
            img {
                width: 100%;
                max-height: 225px;
                object-fit: cover;
                object-position: top;
                display: block;
                -webkit-transition: all 0.5s ease-in-out;
                transition: all 0.5s ease-in-out;
            }
            .top-date {
                position: absolute;
                bottom: 15px;
                left: 15px;
                font-size: 0.9rem;
                color: #fff;
                border-radius: 5px;
                padding: 4px 10px;
                font-weight: 600;
            }
        }
        &:hover .top-img img {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
        .top_info {
            padding: 30px 15px 0;
            .top-title {
                font-size: 1.1rem;
                font-weight: 700;
                color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
                text-transform: capitalize;
                margin-bottom: 10px;
            }
            .top-descri {
                font-weight: 400;
                line-height: 25px;
                color: ${({themeStyle , theme}) => themeStyle[theme].secondaryTextColor};
                margin-bottom: 20px;
            }
        }
    }
    .top-tags {
        padding: 30px 15px;
        font-weight: 700;
        line-height: 25px;
        color: ${({themeStyle , theme}) => themeStyle[theme].pramiaryTextColor};
        font-size: 14px;
        text-transform: capitalize;
        button {
            background-color: transparent;
            border: 0;
            font-size: 1rem;
            margin-left: 5px;
            margin-bottom: 8px;
        }
    }
`;