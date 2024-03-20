import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Ul/Button'
import { addLike } from '../../redux/reducer/productReducer'
import { useDispatch } from 'react-redux'

export const ForYouCards = ({ img, price, title, place, like, id, time, name }) => {
    const dispatch = useDispatch();
    const addProduct = () => {
        dispatch(addLike({ img, price, title, place, like, id, time, name }))
    }

    return (
        <div className='max-w-[210px] w-full bg-white rounded-lg'>
            <div className="flex justify-center flex-col">
                <Link>
                    <img src={img} alt="car" className='rounded-tl-lg rounded-tr-lg rounded-br-lg pt-1 px-1' />

                    <div className="px-3 pt-2  ">
                        <h4 className="text-textColor text-sm font-regular max-w-[182px] w-full mt-3">{title}</h4>
                        <div className="mt-3">
                            <p className="text-red text-xl font-bold  mb-2">{price}</p>
                            <p className="text-gray text-sm font-regular">{place}</p>
                        </div>

                    </div>
                </Link>
                <div className="flex items-center justify-between mt-3 pb-4 px-3">
                    <p className="text-gray text-sm font-regular">{time}</p>
                    <Button click={addProduct}><img src={like} alt="" /></Button>
                </div>
            </div>
        </div>
    )
}
