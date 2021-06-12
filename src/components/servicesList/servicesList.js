import React, { useContext } from 'react';
import './servicesList.css';
import { ServicesListStyled } from './servicesListStyled';
import { MyContext } from '../../Context/context';

function ServicesList({Icon, title , paragraph, color}) {
    const context = useContext(MyContext);
    return (
        <ServicesListStyled color={color} themeStyle={context.themeStyle} theme={context.theme}>
            <div className='icon'>
                {<Icon />}
            </div>
            <h4>{title}</h4>
            <p>{paragraph}</p>
        </ServicesListStyled>
    )
}

export default ServicesList;