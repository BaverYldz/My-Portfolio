import React, { memo } from 'react'
import { techStackImgs } from '../constants/index'
import TitleHeader from '../components/TitleHeader'

const TechStack = memo(() => {
    return (
        <section className='w-full py-10 overflow-hidden flex flex-col items-center justify-center gap-5' id="skills">
            <TitleHeader title="My Tech Stack" sub="Skills" />
            <div className='flex w-full max-w-[1600px] mx-auto overflow-hidden relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-20 after:h-full after:bg-gradient-to-r after:from-black after:to-transparent after:z-10 before:content-[""] before:absolute before:top-0 before:right-0 before:w-20 before:h-full before:bg-gradient-to-l before:from-black before:to-transparent before:z-10'>
                <div className='flex gap-4 animate-marquee whitespace-nowrap items-center w-max'>
                    {/* Render the list twice for seamless loop - ensuring enough content */}
                    {[...techStackImgs, ...techStackImgs].map((tech, index) => (
                        <div key={`${tech.name}-${index}`} className='flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:scale-110 cursor-pointer group'>
                            <div className='w-13 h-13 flex items-center justify-center'>
                                <img
                                    src={tech.imgPath}
                                    alt={tech.name}
                                    className='w-full h-full object-contain brightness-0 invert transition-all duration-300 group-hover:filter-none'
                                />
                            </div>
                            <span className='text-white text-base font-medium transition-colors duration-300'>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

TechStack.displayName = 'TechStack'

export default TechStack