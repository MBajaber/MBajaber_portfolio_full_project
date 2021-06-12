import React, { useContext } from 'react';
import { LayoutStyled } from './layoutStyled';
import { MyContext } from '../Context/context';

export default function Layout(props) {
    const context = useContext(MyContext);
    return (
        <LayoutStyled themeStyle={context.themeStyle} theme={context.theme} className={context.sidebarOpen ? 'open' : ''}>
            {props.children}
        </LayoutStyled>
    )
}
