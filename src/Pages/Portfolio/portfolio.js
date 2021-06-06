import React, { useState } from 'react';
import Title from '../../components/Titles/title';
import './portfolio.css';

function Portfolio() {
    const [portoState, setPortoState] = useState();

    const getValue = (text) => {
        const x = document.querySelectorAll('.navlist_list')[0];
        console.log(x.textContent);
        console.log(text)
    }

    return (
        <div className='portfolio'>
            <Title text='Portfolio' />
            <div className='portfolio-section'>
                <div className="navlist">
                    <button onClick={() => getValue('all')} className='navlist_list active'>all</button>
                    <button onClick={() => getValue('movie')} className='navlist_list'>movie</button>
                    <button onClick={() => getValue('shopping')} className='navlist_list'>shopping</button>
                    <button onClick={() => getValue('restaurant')} className='navlist_list'>restaurant</button>
                    <button onClick={() => getValue('single')} className='navlist_list'>single</button>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
