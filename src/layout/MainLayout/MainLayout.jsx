import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    
    return (
        <div className='h-screen flex flex-col justify-between'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
