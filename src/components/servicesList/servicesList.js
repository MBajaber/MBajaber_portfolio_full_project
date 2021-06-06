import React from 'react';
import './servicesList.css';

function ServicesList({Icon, title , paragraph}) {
    return (
        <div className='services-item'>
            <div className='icon'>
                {<Icon />}
            </div>
            <h4>{title}</h4>
            <p>{paragraph}</p>
        </div>
    )
}

export default ServicesList;