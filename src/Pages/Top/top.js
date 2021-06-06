import React from 'react';
import Title from '../../components/Titles/title';
import Toplist from '../../components/toplist/toplist';
import TopsInfo from './topInfo.json';
import TopImg1 from '../../assets/tops/p8.png';
import TopImg2 from '../../assets/tops/p5.png';
import TopImg3 from '../../assets/tops/p2.png';

import './top.css';

function top() {
    const imgArr = [TopImg1, TopImg2, TopImg3];
    return (
        <div className='tops'>
            <Title text='Latest Top' />
            <div className='tops-content'>
                {TopsInfo.map((list, index) => (
                    <Toplist
                        key={imgArr[index]}
                        link={imgArr[index]}
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
