import React from 'react';
import './layout.css';

export default function layout(props) {
    return (
        <div className='layout_content'>
            {props.children}
        </div>
    )
}
