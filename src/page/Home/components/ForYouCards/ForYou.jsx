import React from 'react'
import { useGetForyou } from '../../Service/Query/useGetForyou.js'
import { nanoid } from 'nanoid'
import { ForYouCards } from '../../../../components/ForYouCards/ForYouCards.jsx'
import useDebounce from '../../../../hook/useDebaunse'

export const ForYou = () => {
    const { data, isLoading, error } = useGetForyou()
    
    return (
        <section className="mt-8">
            <div className="container">
                <h3 className="text-dark text-2xl font-bold">Siz uchun maxsus</h3>
                <div className="mt-8 gap-[15px] flex items-center flex-wrap">
                    {isLoading ? <h1>loading...</h1> : data?.map((item) => (
                        <ForYouCards key={nanoid()} id={item.id}  {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
