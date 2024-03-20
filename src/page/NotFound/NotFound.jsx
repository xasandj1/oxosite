import React from 'react'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import { primaryButton } from '../../components/Ul/Button'

export const NotFound = () => {
    return (
        <section className="h-screen">
            <div className="container not__found">
                <img src={images.NotFound} alt="" />
                <h3 className="text-xl font-medium text-primary">Sahifa topilmadi</h3>
                <p className="text-base font-regular text-gray mt-2">Ehtimol, ro'yhatan o'tish joyidan siz qidirgan narsangizni topishingiz mumkin</p>
                <Link className={`${primaryButton} mt-6`} to="/signup">Royhatan o'tish</Link>
            </div>
        </section>
    )
}
