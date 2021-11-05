import React, { useContext } from 'react';
import Title from '../../components/Titles/title';
import Toplist from '../../components/toplist/toplist';
import TopsInfo from './topInfo.json';
import './top.css';
import { MyContext } from '../../Context/context';

function Top() {
    const context = useContext(MyContext);
    return (
        <div className='top'>
            <Title text='Latest Top' />
            <div className='top_content'>
                {TopsInfo.map((list, index) => (
                    <Toplist
                        key={`${list.link}_${index}`}
                        link={process.env.PUBLIC_URL + list.link}
                        alt={list.imageAlt}
                        date={list.date}
                        title={list.title}
                        paragraph={list.paragraph}
                        tags={list.tags}
                        color={context.mainColor}
                        github_link={list.github_link}
                        live_link={list.live_link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Top;
