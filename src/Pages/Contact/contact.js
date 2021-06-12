import React, { useContext } from 'react';
import Title from '../../components/Titles/title';
import { AiTwotonePhone, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillEnvelopeOpenFill } from 'react-icons/bs';
import { FaLinkedinIn, FaRegSmileBeam } from 'react-icons/fa';
import { MyContext } from '../../Context/context';
import { ContactStyled } from './contactStyled';

function Contact() {
    const context = useContext(MyContext);
    return (
        <ContactStyled themeStyle={context.themeStyle} theme={context.theme}>
            <Title text='contact me' />
            <div className="content_info">
                <div className="content_info_item">
                    <div className="icon">
                        {<AiTwotonePhone size={45} color={context.mainColor} />}
                    </div>
                    <h4>call me on</h4>
                    <p>+966 578900968</p>
                    <p>+966 561034303</p>
                </div>
                <div className="content_info_item">
                    <div className="icon">
                        {<HiLocationMarker size={45} color={context.mainColor} />}
                    </div>
                    <h4>City</h4>
                    <p>Jeddah, Saudi Arabia</p>
                </div>
                <div className="content_info_item">
                    <div className="icon">
                        {<BsFillEnvelopeOpenFill size={45} color={context.mainColor} />}
                    </div>
                    <h4>email</h4>
                    <p>mbajaber19@gmail.com</p>
                </div>
            </div>
            <div className='social'>
                <div className='title'>
                    <h4>I'm so happy to contact me on my social accounts</h4>
                    <FaRegSmileBeam size={40} />
                </div>
                <div className='social_icons'>
                    <a href='https://www.linkedin.com/in/mohammed-bajaber' target='_blank' rel="noopener noreferrer" style={{backgroundColor: context.mainColor}}>
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href='https://github.com/MBajaber' target='_blank' rel="noopener noreferrer" style={{backgroundColor: context.mainColor}}>
                        <AiFillGithub size={22} />
                    </a>
                    <a href='https://twitter.com/m_bajaber7' target='_blank' rel="noopener noreferrer" style={{backgroundColor: context.mainColor}}>
                        <AiOutlineTwitter size={22} />
                    </a>
                </div>
            </div>
        </ContactStyled>
    )
}

export default Contact;
