import React from 'react'
import { FaTwitter, FaInstagram } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='bg-[#fc6a03] h-[300px] sm:h-screen w-10 sm:w-20 z-10 flex flex-col box-shadow absolute left-0' >
            <div className='text-white m-auto'>
                <div className='my-10'>
                    <a href="https://twitter.com/givetheneedy556" target='_blank' className='text-2xl sm:text-4xl'>
                        <FaTwitter />
                    </a>
                </div>
                <div className='my-10'>
                    <a className='text-2xl sm:text-4xl' target='_blank' href="https://instagram.com/give_the_needy_official?igshid=MzRlODBiNWFlZA==">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar