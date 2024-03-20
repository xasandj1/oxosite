import React from 'react'
import { AllCategoryCards } from '../../../../components/AllCategoryCards';
import { nanoid } from 'nanoid';
import { useGetCategorys } from "../../Service/Query/useGetCategorys"

export const AllCategory = () => {
    const { data, isLoading, error } = useGetCategorys()
    return (
        <section className="mt-8 bg-white">
            <div className="container pt-8 pb-[56px]">
                <div className=""></div>
                {isLoading ? <h1>Loading...</h1> : <div className="flex items-baseline flex-wrap gap-[36px]">
                    {data?.map((item) => (
                        <AllCategoryCards key={nanoid()} img={item.img} name={item.name} />
                    ))}
                </div>}
            </div>
        </section>
    )
}
