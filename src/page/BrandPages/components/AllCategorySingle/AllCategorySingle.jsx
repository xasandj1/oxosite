import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { usegetAll } from '../../service/usegetAll';
import { CategoryCardsSingle } from '../../../../components/CategoryCardsSingle/CategoryCardsSingle';
import { nanoid } from 'nanoid';
import Button from '../../../../components/Ul/Button';
import { useGetWork } from '../../service/useGetWork';

export const AllCategorySingle = () => {
    const { name } = useParams()
    const { data, isLoading } = useGetWork()
    const filteredProduct = data?.filter((item) => item?.name == name)
    return (
        <section className="mt-8 bg-bgGray">
            <div className="container">
                <div className="">
                    <h1 className='text-dark text-2xl font-bold'>{name}</h1>
                </div>
                {isLoading ? <h1 className='text-4xl text-primary font-bold'>Loading...</h1> : <div className="flex items-center gap-[15px] flex-wrap mt-9">
                    {filteredProduct?.map((item) => (
                        <div key={nanoid()} className='max-w-[210px] w-full bg-white rounded-lg'>
                            <div className="flex justify-center flex-col">
                                <Link>
                                    <img src={item?.img} alt="car" className='rounded-tl-lg rounded-tr-lg rounded-br-lg pt-1 px-1' />

                                    <div className="px-3 pt-2  ">
                                        <h4 className="text-textColor text-sm font-regular max-w-[182px] w-full mt-3">{item?.title}</h4>
                                        <div className="mt-3">
                                            <p className="text-red text-xl font-bold  mb-2">{item?.price}</p>
                                            <p className="text-gray text-sm font-regular">{item?.place}</p>
                                        </div>

                                    </div>
                                </Link>
                                <div className="flex items-center justify-between mt-3 pb-4 px-3">
                                    <p className="text-gray text-sm font-regular">{item?.time}</p>
                                    <Button><img src={item?.like} alt="" /></Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>
        </section>
    )
}
