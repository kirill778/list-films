import React from 'react'

export const Navbar = () => {
    return (
        <div className='w-80 h-screen bg-gray-500 items-center justify-center'>
            <div className='flex flex-col items-center justify-center bg-purple-500 w-full'>
                <h1 className='text-2xl font-bold text-white font-bebas-neue mt-10 mb-10 uppercase'>Logo</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
                <nav>
                    <p className='text-white font-bebas-neue text-2xl mb-10'>Menu</p>
                    <ul className='flex flex-col items-center justify-center w-full'>
                        <li className='text-white font-bebas-neue text-2xl'>Home</li>
                        <li className='text-white font-bebas-neue text-2xl'>About</li>
                        <li className='text-white font-bebas-neue text-2xl'>Contact</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}