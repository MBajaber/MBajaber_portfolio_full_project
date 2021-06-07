import React, { useState } from 'react';
import Title from '../../components/Titles/title';
import './portfolio.css';
import portfolioInfo from './portfolioInfo.json';
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { RiFullscreenFill } from 'react-icons/ri';

function Portfolio() {

    const [portoState, setPortoState] = useState('all');
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({});

    const getValue = (text) => {
        const allList = [...document.querySelectorAll('.list_link')];
        allList.forEach(e => {
            e.classList.remove('active');
            setPortoState(text);
            if(e.textContent === text) {
                e.classList.add('active');
            }
        });
    }

    const popupHandler = (data) => {
        setShowPopup(prevShowPopup => !prevShowPopup);
        setPopupData(data);
    }

    const getClassName = (e) => {
        if(e === 'popup' || e === 'close_btn') {
            setShowPopup(prevShowPopup => !prevShowPopup);
        }
    }

    return (
        <div className='portfolio'>
            <Title text='Portfolio' />
            <div className="list">
                <button onClick={() => getValue('all')} className='list_link active'>all</button>
                <button onClick={() => getValue('movie')} className='list_link'>movie</button>
                <button onClick={() => getValue('shopping')} className='list_link'>shopping</button>
                <button onClick={() => getValue('restaurant')} className='list_link'>restaurant</button>
                <button onClick={() => getValue('single')} className='list_link'>single</button>
                <button onClick={() => getValue('react')} className='list_link'>react</button>
            </div>
            <div className='portfolio-gallery'>
                {
                    portfolioInfo.map((list, index) => {
                        if(list.type.some(e => e === portoState)) {
                            return (
                                <div className='gallery-item' key={`${list.photoLink}_${index}`}>
                                    <div className='gallery-image'>
                                        <div className='black_popup'>
                                            <h4>{list.text}</h4>
                                            <RiFullscreenFill onClick={() => popupHandler({link: process.env.PUBLIC_URL + list.photoLink, text: list.text})} size={25} />
                                        </div>
                                        <img src={process.env.PUBLIC_URL + list.photoLink} alt={`${list.text} Gallery ${index + 1}`} loading='lazy' />
                                    </div>
                                    <div className='icon-svg'>
                                        <a href={list.githubLink} className='github_link' >
                                            <AiFillGithub size={30} />
                                        </a>
                                        <a href={list.websiteLink} className='website_link' >
                                            <BsLink45Deg size={30} />
                                        </a>
                                    </div>
                                </div>
                            ) 
                        }
                    })
                }
            </div>
            {
                showPopup && (
                    <div className='popup' onClick={e => getClassName(e.target.className)}>
                        <div className='popup-section'>
                            <div className='close_btn' >
                                <AiOutlineClose size={20} />
                            </div>
                            <div className='popup_box'>
                                <img src={popupData.link} loading='lazy' />
                            </div>
                            <h4 className='title'>{popupData.text}</h4>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Portfolio;
