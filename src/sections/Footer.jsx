import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className='footer relative pt-5'>
            {/* Top Border Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className='footer-container'>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    <a href='/'>Terms & Conditions</a>
                </div>
                <div className='socials'>
                    {socialImgs.map((img) => (
                        <a className='icon' target='_blank' href={img.url} key={img.url}>
                            <img src={img.imgPath} style={{ width: 'auto', height: '25px' }} />
                        </a>
                    ))}
                </div>

                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-end'>
                        ©  {new Date().getFullYear()} Bawer YLZ | All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer