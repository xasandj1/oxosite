import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/img/logo.svg"
import { links } from './data'
import { loadState } from '../../lib/storage'
import { images } from '../../constants'
import useDebounce from '../../hook/useDebaunse'
import { primaryButton } from '../../components/Ul/Button'

export const Header = () => {
    const token = loadState("token")
    
    return (
        <header className="bg-white py-5">
            <div className="container flex items-center justify-between">
                <Link to={"/"}><img src={Logo} alt="" /></Link>
                <div className="flex items-center gap-[24px]">
                    <ul className="flex items-center gap-[24px]">
                        {links.map((route) => (
                            <Link key={route.path} to={route.path} className='text-dark text-sm font-medium tracking-0.4px text-primary flex items-center gap-2'>
                                <img src={route.img} alt="" />
                                {route.name}
                            </Link>
                        ))}
                        {
                            token ?
                                <Link to="/account" className='text-primary font-roboto text-[14px] font-medium leading-[20px] tracking-wider flex items-center gap-2'>
                                    <img src={images.User} alt="" />
                                    Akkaunt
                                </Link> :
                                <Link to="/signup" className='text-primary font-roboto text-[14px] font-medium leading-[20px] tracking-wider flex items-center gap-2'>
                                    <img src={images.User} alt="" />
                                    Login
                                </Link>
                        }
                    </ul>

                    <select className='cursor-pointer text-sm font-medium tracking-0.4px text-primary flex items-center gap-2'>
                        <option value="">Uz</option>
                        <option value="">Ru</option>
                    </select>
                    <Link to="/create" className={`${primaryButton} ml-9`}>E'lonlarni joylashtirish</Link>
                </div >
            </div >
        </header >
    )
}
