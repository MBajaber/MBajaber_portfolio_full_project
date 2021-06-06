import React from 'react';
import './Services.css';
import Title from '../../components/Titles/title';
import ServerList from '../../components/servicesList/servicesList';
import { BsLaptop, BsCodeSlash } from 'react-icons/bs';
import { HiPhotograph } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';
import { FaRocket, FaPaintBrush } from 'react-icons/fa';
import ServersInfo from './servicesInformation.json'

function Services() {
    const iconsSVG = [BsLaptop, BsCodeSlash, HiPhotograph, BiSupport, FaRocket, FaPaintBrush];
    return (
        <div className='services'>
            <Title text='Services' />
            <div className='services-content'>
                {
                    ServersInfo.map((list, index) => {
                        return (
                            <ServerList
                                key={list.title}
                                Icon={iconsSVG[index]}
                                title={list.title}
                                paragraph={list.paragraph}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services
