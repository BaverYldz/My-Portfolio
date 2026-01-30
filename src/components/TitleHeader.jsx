import React from 'react'

const TitleHeader = ({ title, sub }) => {
    return (
        <div className='flex flex-col items-center gap-4 mb-20 relative py-4 w-full overflow-visible'>
            {/* Soft Spotlight Glow */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-white/[0.03] blur-[100px] rounded-full pointer-events-none'></div>

            {sub && (
                <div className='hero-badge opacity-60 backdrop-blur-md border border-white/5 py-1 px-3'>
                    <p className='uppercase tracking-[0.3em] font-bold text-[10px] text-white/70'>{sub}</p>
                </div>
            )}

            <div className='relative group'>
                {/* Main Title with Shimmer Overlay */}
                <hgroup className='relative'>
                    <h2 className='font-black md:text-6xl text-4xl text-center tracking-tighter text-white relative z-10'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40'>
                            {title}
                        </span>
                        {/* Animated Shimmer Overlay on Hover */}
                        <span className='absolute inset-0 bg-clip-text text-transparent bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.6),55%,transparent)] bg-[length:200%_100%] animate-[shimmer_5s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none'>
                            {title}
                        </span>
                    </h2>
                </hgroup>

                {/* Architectural Decorative Underline */}
                <div className='flex items-center justify-center gap-4 mt-6'>
                    <div className='h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40 group-hover:w-32 md:group-hover:w-48 transition-all duration-700 ease-out'></div>
                    <div className='relative flex items-center justify-center'>
                        <div className='size-2 rounded-full bg-white/80 group-hover:bg-white transition-colors duration-500'></div>
                        <div className='absolute size-4 rounded-full border border-white/20 animate-ping opacity-20 group-hover:opacity-40'></div>
                    </div>
                    <div className='h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40 group-hover:w-32 md:group-hover:w-48 transition-all duration-700 ease-out'></div>
                </div>
            </div>
        </div>
    )
}



export default TitleHeader