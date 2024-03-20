import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../constants'

export const Footer = () => {
    return (
        <footer className="mt-[61px] bg-primary py-[35px]">
            <div className="container flex flex-col">
                <div className="flex justify-between border-b pb-6 border-b-borderColor">
                    <div>
                        <Link to="/"><img src={images.WhiteLogo} alt="" /></Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link to="/" className='text-white font-medium text-sm'>Mobil ilovalar</Link>
                        <Link to="/" className='text-white font-medium text-sm'>Yordam</Link>
                        <Link to="/" className='text-white font-medium text-sm'>Pullik xizmatlar</Link>
                        <Link to="/" className='text-white font-medium text-sm'>OXO da biznes</Link>
                        <Link to="/" className='text-white font-medium text-sm'>Saytda reklama</Link>
                        <Link to="/" className='text-white font-medium text-sm'>Foydalanish shartlari</Link>
                        <Link to="/" className='text-white font-medium text-sm'>Maxfiylik siyosati</Link>
                        <Link to="/" className='text-white font-medium text-sm'>Foydalanish shartlari</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link to="/" className='text-white font-medium text-sm'>Qanday qilib sotish va sotib olish kerak?</Link>
                        <Link to="/" className='text-white font-medium text-sm'>Xavfsizlik qoidalari</Link>
                        <Link to="/" className='text-white font-medium text-sm'>Sayt xaritasi</Link>
                        <Link to="/" className='text-white font-medium text-sm'>Mintaqalar xaritasi</Link>
                        <Link to="/" className='text-white font-medium text-sm'>OXO da karyera</Link>
                        <Link to="/" className='text-white font-medium text-sm'>Qayta aloqa</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link to="/"><img src={images.AppStore} alt="" /></Link>
                        <Link to="/"><img src={images.PlayStore} alt="" /></Link>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="mt-8 text-white font-medium text-sm">© 2022 Barcha huquqlar himoyalangan.Ushbu sayt cookie-fayllardan foydalanadi. Brauzeringizda cookie sozlamalarini o'zgartirishingiz mumkin.</p>
                </div>
            </div>
        </footer>
    )
}
