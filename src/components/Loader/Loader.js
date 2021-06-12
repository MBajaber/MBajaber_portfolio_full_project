import React, { useContext } from 'react';
import './Loader.css';
import { MyContext } from '../../Context/context';

const Loader = () => {
    const context = useContext(MyContext);
    return (
        <div className='loader'>
            <div style={{borderColor: `${context.mainColor} transparent transparent transparent`}}></div>
            <div style={{borderColor: `${context.mainColor} transparent transparent transparent`}}></div>
            <div style={{borderColor: `${context.mainColor} transparent transparent transparent`}}></div>
            <div style={{borderColor: `${context.mainColor} transparent transparent transparent`}}></div>
        </div>
    )
}

export default Loader;