import React from 'react';
import Title from '../../components/Titles/title';
import Toplist from '../../components/toplist/toplist';
import TopsInfo from './topInfo.json';
import './top.css';

function top() {
    return (
        <div className='tops'>
            <Title text='Latest Top' />
            <div className='tops-content'>
                {TopsInfo.map((list, index) => (
                    <Toplist
                        key={`${list.link}_${index}`}
                        link={process.env.PUBLIC_URL + list.link}
                        alt={list.imageAlt}
                        date={list.date}
                        title={list.title}
                        paragraph={list.paragraph}
                        tags={list.tags}
                    />
                ))}
            </div>
        </div>
    )
}

export default top
