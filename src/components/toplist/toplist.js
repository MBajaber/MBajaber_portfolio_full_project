import React from 'react';
import './toplist.css';

function toplist(props) {
    return (
        <div className='top-item'>
            <div className="top-img">
                <img src={props.link} alt={props.alt} loading='lazy' />
                <span className="top-date">{props.date}</span>
            </div>
            <div className="top_info">
                <h4 className="top-title">{props.title}</h4>
                <p className="top-descri">{props.paragraph}</p>
            </div>
            <p className="top-tags">
                Tags: {props.tags.map(tag => <button key={`${tag}_${Math.random() * 10000}`}><a href={`#${tag.toLowerCase()}`}>{tag}</a>,</button> )} 
            </p>
        </div>
    )
}

export default toplist;