import React, { useContext } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { MyContext } from '../../Context/context';
import { HomeStyled } from './homeStyled';

function Home() {

    const context = useContext(MyContext);
    return (
        <HomeStyled themeStyle={context.themeStyle} theme={context.theme}>
            <div className='intro'>
                <img className='my-photo ' src={process.env.PUBLIC_URL + '/my_photo/my_photo.png'} alt='my personal Pic' loading='lazy' />
                <h2>Mohammed Bajaber</h2>
                <p>I'm a Front End Developer</p>
                <div className='social_icons'>
                    <a href='https://www.linkedin.com/in/mohammed-bajaber' aria-label="LinkedIn" target='_blank' rel="noopener noreferrer" style={{backgroundColor: context.mainColor}} >
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href='https://github.com/MBajaber' target='_blank' aria-label="Github" rel="noopener noreferrer" style={{backgroundColor: context.mainColor}}>
                        <AiFillGithub size={22} />
                    </a>
                    <a href='https://twitter.com/m_bajaber7' target='_blank' aria-label="Twitter" rel="noopener noreferrer" style={{backgroundColor: context.mainColor}}>
                        <AiOutlineTwitter size={22} />
                    </a>
                </div>
            </div>
        </HomeStyled>
    )
}

export default Home;