import React from 'react'
import { Link } from 'react-router-dom'

export const AllCategoryCards = ({ id, name, img }) => {
    return (
        <Link to={`/barchasi/${name}`} className='flex items-center flex-col'>
            <img src={img} alt="" />
            <h3 className="text-textColor text-sm font-regular w-[80px] text-center mt-4">{name}</h3>
        </Link>
    )
}
