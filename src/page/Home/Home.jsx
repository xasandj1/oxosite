import React from 'react'
import { AllCategory } from './components/AllCategory'
import { SearchCategorys } from '../../layout/SearchCategorys'
import { ForYou } from './components/ForYouCards'

export const Home = () => {
    return (
        <>
            <SearchCategorys />
            <AllCategory />
            <ForYou />
        </>
    )
}
