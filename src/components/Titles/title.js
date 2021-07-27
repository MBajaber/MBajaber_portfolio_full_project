import React, { useContext } from 'react';
import { MyContext } from '../../Context/context';
import { TitleStyled } from './titleStyled';

const Title = (props) => {
    const context = useContext(MyContext);
    return (
        <TitleStyled color={context.mainColor} themeStyle={context.themeStyle} theme={context.theme}>
            <h2>{props.text}</h2>
        </TitleStyled>
    )
}

export default Title;
