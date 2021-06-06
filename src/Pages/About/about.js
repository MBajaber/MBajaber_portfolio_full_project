import React from 'react';
import './about.css';
import { NavLink } from 'react-router-dom';
import { AiTwotoneCalendar } from 'react-icons/ai';
import Title from '../../components/Titles/title';
import Html from '../../assets/skills/html.png';
import Css from '../../assets/skills/css.png';
import JavaScript from '../../assets/skills/javascript.png';
import Bootstrap from '../../assets/skills/bootstrap.png';
import Sass from '../../assets/skills/sass.png';
import Git from '../../assets/skills/git.png';
import Jquery from '../../assets/skills/jquery.png';
import ReactIMG from '../../assets/skills/react.png';

function about() {
    return (
        <div className='about'>
            <Title text='about me' />
            <div className='about-text'>
                <h3>
                    I'm Mohammed Bajaber a <span>web developer</span>
                </h3>
                <p>I'm a Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, I Design, Develop and implement websites using HTML, CSS, JavaScript and other Frameworks, I can deliver a compatible website for different devices, browsers, and platforms.</p>
            </div>
            <div className='person-info'>
                <h2 className='section-title'>Skills:</h2>
                <div className='skills'>
                    <div className='image html'>
                        <img src={Html} alt='HTML' title='HTML' loading='lazy' />
                    </div>
                    <div className='image css'>
                        <img src={Css} alt='Css' title='Css' loading='lazy' />
                    </div>
                    <div className='image jquery'>
                        <img src={Jquery} alt='Jquery' title='Jquery' loading='lazy' />
                    </div>
                    <div className='image sass'>
                        <img src={Sass} alt='Sass' title='Sass' loading='lazy' />
                    </div>
                    <div className='image react'>
                        <img src={ReactIMG} alt='React' title='React' loading='lazy' />
                    </div>
                    <div className='image javaScript'>
                        <img src={JavaScript} alt='JavaScript' title='JavaScript' loading='lazy' />
                    </div>
                    <div className='image bootstrap'>
                        <img src={Bootstrap} alt='Bootstrap' title='Bootstrap' loading='lazy' />
                    </div>
                    <div className='image git'>
                        <img src={Git} alt='Git' title='Git' loading='lazy' />
                    </div>
                </div>
                <div className='personal_info'>
                    <h2 className='section-title'>information:</h2>
                    <ul className='info_list'>
                        <li>
                            Birthday:
                            <span>20 April 1996</span>
                        </li>
                        <li>
                            Age:
                            <span>25</span>
                        </li>
                        <li>
                            Email:
                            <span>mbajaber19@gmail.com</span>
                        </li>
                        <li>
                            Degree:
                            <span>B.Computer Science</span>
                        </li>
                        <li>
                            Phone-1 :
                            <span>+966 561034303</span>
                        </li>
                        <li>
                            Phone-2 :
                            <span>+966 578900968</span>
                        </li>
                        <li>
                            City :
                            <span>Jeddah, KSA</span>
                        </li>
                        <li>
                            Nationality :
                            <span>Yemen</span>
                        </li>
                    </ul>
                    <div className='about_btn_links'>
                        <a href='Mohammed Ahmed Bajaber CV (Front-End Developer).pdf' target='_blank'>download cv</a>
                        <NavLink to='/content'>hire me</NavLink>
                    </div>
                </div>
                <div className="education">
                    <h2 className='section-title'>information:</h2>
                    <div className='education-content'>
                        <div className='timeline-item'>
                            <div className='circle-dot'></div>
                            <div className='timeline-date'>
                                <AiTwotoneCalendar size={20} />
                                July 2016 - July 2019.
                            </div>
                            <h4 className='timeline-title'>Bachelor Of Computer Science, Hyderabad— India.</h4>
                            <p className='timeline-text'>I Start Study In July In 2016 The Duration of 3 Years I graduated in July 2019 In Hyderabad City in India.</p>
                        </div>
                        <div className='timeline-item'>
                            <div className='circle-dot'></div>
                            <div className='timeline-date'>
                                <AiTwotoneCalendar size={20} />
                                February 2016 - July 2016.
                            </div>
                            <h4 className='timeline-title'>Diploma in English, Bangalore— India.</h4>
                            <p className='timeline-text'>I Start Study In February In 2016 The Duration of 6 Months I Took a certificate diploma in July 2016 In Bangalore City in India.</p>
                        </div>
                        <div className='timeline-item'>
                            <div className='circle-dot'></div>
                            <div className='timeline-date'>
                                <AiTwotoneCalendar size={20} />
                                2011 - 2014
                            </div>
                            <h4 className='timeline-title'>high School</h4>
                            <p className='timeline-text'>I graduated In 2014 From Jeddah City in Saudi Arabia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about;