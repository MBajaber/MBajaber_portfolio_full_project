import React, {useState, useEffect, useContext } from 'react';
import { Link }  from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaLevelUpAlt, FaComments } from 'react-icons/fa';
import { SidebarStyled } from './sidebarStyled';
import { MyContext } from '../Context/context';

function Sidebar() {
    const context = useContext(MyContext);

    const [chooseTheme, setChooseTheme] = useState(context.theme);

    useEffect(() => {
        setChooseTheme(context.theme)
    }, [context.theme])
    
    const checkboxThemeHandler = (e) => {
        context.toggleTheme();
    }

    return (
        <SidebarStyled color={context.mainColor} themeStyle={context.themeStyle} theme={context.theme} className={context.sidebarOpen ? 'open' : ''}>
            <div className='logo'>
                <Link to='/' onClick={() => context.toggleSidebar()}>MBajaber</Link>
            </div>
            <div className={`nav-toggle ${context.sidebarOpen ? 'open' : ''}`} onClick={() => context.toggleSidebar()} >
                <span></span>
            </div>
            <ul className='nav'>
                <li>
                    <NavLink to='/' className='navLinkLink' exact onClick={() => context.toggleSidebar()}>
                        <AiOutlineHome size={20} />
                        <span>home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className='navLinkLink' onClick={() => context.toggleSidebar()} >
                        <AiOutlineUser size={20} />
                        <span>About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/services' className='navLinkLink' onClick={() => context.toggleSidebar()} >
                        <AiOutlineUnorderedList size={20} />
                        <span>Services</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' className='navLinkLink' onClick={() => context.toggleSidebar()} >
                        <BsBriefcaseFill size={20} />
                        <span>Portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/top' className='navLinkLink' onClick={() => context.toggleSidebar()} >
                        <FaLevelUpAlt size={20} />
                        <span>Top</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='contact' className='navLinkLink' onClick={() => context.toggleSidebar()} >
                        <FaComments size={20} />
                        <span>Content</span>
                    </NavLink>
                </li>
            </ul>
            <div className='choose_color section'>
                <h5>Choose Color :</h5>
                <ul className='choose_color_list'>
                    <li onClick={() => context.changeColor('#ec1839')}></li> 
                    <li onClick={() => context.changeColor('#2196f3')}></li> 
                    <li onClick={() => context.changeColor('#fa5b0f')}></li>
                    <li onClick={() => context.changeColor('#ffb400')}></li> 
                    <li onClick={() => context.changeColor('#72b626')}></li> 
                </ul>
            </div>
            <div className='choose_theme section'>
                <h5>Choose Theme :</h5>
                <form>
                    <div className='form_group'>
                        <input type='radio' name='theme' id='light_theme' value='light' onChange={checkboxThemeHandler} checked={chooseTheme === 'light'} />
                        <label htmlFor='light_theme'>light</label>
                    </div>
                    <div className='form_group'>
                        <input type='radio' name='theme' id='dark_theme' value='dark' onChange={checkboxThemeHandler} checked={chooseTheme === 'dark'} />
                        <label htmlFor='dark_theme'>dark</label>
                    </div>
                </form>
            </div>
            <div className='copyright'>
                &copy; 2021 Mohammed Bajaber
            </div>
        </SidebarStyled>
    );
}

export default Sidebar;
