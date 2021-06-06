import React from 'react';
import './home.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import MyPhoto from '../../assets/my_photo/my_photo.png';

function home() {
    return (
        <div className='home'>
            <div className='intro'>
                <img className='my-photo' src={MyPhoto} alt='my personal Pic' loading='lazy' />
                <h2>Mohammed Bajaber</h2>
                <p>I'm a Front End Developer</p>
                <div className='social_icons'>
                    <a href='linkedin' target='blank'>
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href='github' target='blank'>
                        <AiFillGithub size={22} />
                    </a>
                    <a href='twitter' target='blank'>
                        <AiOutlineTwitter size={22} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default home;