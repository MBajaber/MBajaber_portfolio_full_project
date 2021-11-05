import React, { useContext } from 'react';
import { TopListStyled } from './toplistStyled';
import { MyContext } from '../../Context/context';

function Toplist(props) {
    const context = useContext(MyContext);
    return (
        <TopListStyled themeStyle={context.themeStyle} theme={context.theme}>
            <div className='info'>
                <div className='top-img'>
                    <img src={props.link} alt={props.alt} loading='lazy' />
                    <span className="top-date" style={{backgroundColor: props.color}}>{props.date}</span>
                </div>
                <div className="top_info">
                    <h4 className="top-title">{props.title}</h4>
                    <p className="top-descri">{props.paragraph}</p>
                </div>
            </div>
            <div className='top_links'>
                <button><a href={props.github_link} target='_blanck'>github</a></button>
                <button><a href={props.live_link} target='_blanck'>live Demo</a></button>
            </div>
            <div className="top-tags">
                Tags: {props.tags.map(tag => <button key={`${tag}_${Math.random() * 10000}`}><a style={{color: props.color}} href={`#${tag.toLowerCase()}`}>{tag}</a>,</button> )}
            </div>
        </TopListStyled>
    )
}

export default Toplist;