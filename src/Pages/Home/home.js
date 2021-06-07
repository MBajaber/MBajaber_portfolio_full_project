import React from 'react';
import './home.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

function home() {
    return (
        <div className='home'>
            <div className='intro'>
                <img className='my-photo' src={process.env.PUBLIC_URL + '/my_photo/my_photo.png'} alt='my personal Pic' loading='lazy' />
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