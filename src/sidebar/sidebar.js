    import React from 'react';
import './sidebar.css';
import { Link }  from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaLevelUpAlt, FaComments } from 'react-icons/fa';

function sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <Link to='/'>MBajaber</Link>
            </div>
            <div className='nav-toggle'>
                <span></span>
            </div>
            <ul className='nav'>
                <li>
                    <NavLink to='/' className='navLinkLink' exact>
                        <AiOutlineHome size={20} />
                        <span>home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className='navLinkLink' >
                        <AiOutlineUser size={20} />
                        <span>About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/services' className='navLinkLink' >
                        <AiOutlineUnorderedList size={20} />
                        <span>Services</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' className='navLinkLink' >
                        <BsBriefcaseFill size={20} />
                        <span>Portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/top' className='navLinkLink' >
                        <FaLevelUpAlt size={20} />
                        <span>Top</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='contact' className='navLinkLink' >
                        <FaComments size={20} />
                        <span>Content</span>
                    </NavLink>
                </li>
            </ul>
            <div className='copyright'>
                &copy; 2021 Mohammed Bajaber
            </div>
        </div>
    );
}

export default sidebar
