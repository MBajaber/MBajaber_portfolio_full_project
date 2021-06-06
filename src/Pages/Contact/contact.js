import React from 'react';
import './contact.css';
import Title from '../../components/Titles/title';
import { AiTwotonePhone } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillEnvelopeOpenFill } from 'react-icons/bs';

function contact() {
    return (
        <div className='contact'>
            <Title text='contact me' />
            <div className="content_info">
                <div className="content_info_item">
                    <div className="icon">
                        {<AiTwotonePhone size={45} />}
                    </div>
                    <h4>call me on</h4>
                    <p>+966 561034303</p>
                    <p>+966 578900968</p>
                </div>
                <div className="content_info_item">
                    <div className="icon">
                        {<HiLocationMarker size={45} />}
                    </div>
                    <h4>City</h4>
                    <p>Jeddah,Saudi Arabia</p>
                </div>
                <div className="content_info_item">
                    <div className="icon">
                        {<BsFillEnvelopeOpenFill size={45} />}
                    </div>
                    <h4>email</h4>
                    <p>mbajaber19@gmail.com</p>
                </div>
            </div>
            <form className='form'>
                <div className='form-div form-half'>
                    <input type='text' placeholder='Name*' />
                    <input type='text' placeholder='Email*' />
                </div>
                <div className='form-div form-full'>
                    <input type='text' placeholder='Subject*' />
                </div>
                <div className='form-div form-full'>
                    <textarea type='text' placeholder='Your Message...*' />
                </div>
                <button type='submit' className='submit'>send message</button>
            </form>
        </div>
    )
}

export default contact;
