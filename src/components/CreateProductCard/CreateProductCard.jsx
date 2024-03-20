import React from 'react'

export const CreateProductCard = ({ title, price, img }) => {
    return (
        <div className="">
            <img src={img} alt="" />
            <div className="">
                <h4 className="">{title}</h4>
                <p className="">{price}</p>
            </div>
        </div>
    )
}
