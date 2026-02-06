import React from 'react'
import TitleHeader from '../components/TitleHeader'

const Resume = () => {
    return (
        <section id='resume' className='px-5 md:px-10 py-24 relative overflow-hidden'>
            {/* Background Glow - Simplified */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[80px] pointer-events-none" />

            <TitleHeader title="My Resume" sub="Quick Look" />

            <div className='flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto mt-16 relative z-10'>
                <a
                    href="/cv/OmerCV-Turkce.pdf"
                    download="OmerCV-Turkce.pdf"
                    className="flex-1 group relative p-10 bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-500 shadow-2xl flex flex-col items-center gap-6 text-center"
                >
                    {/* Spotlight Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3">CV Türkçe</h3>
                        <div className="text-white/40 font-medium tracking-wider uppercase text-xs flex items-center justify-center gap-3">
                            <span>Download PDF</span>
                            <div className="w-8 h-px bg-white/20 group-hover:w-12 transition-all duration-500" />
                        </div>
                    </div>
                </a>

                <a
                    href="/cv/OmerCV-English.pdf"
                    download="OmerCV-English.pdf"
                    className="flex-1 group relative p-10 bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-500 shadow-2xl flex flex-col items-center gap-6 text-center"
                >
                    {/* Spotlight Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3">CV English</h3>
                        <div className="text-white/40 font-medium tracking-wider uppercase text-xs flex items-center justify-center gap-3">
                            <span>Download PDF</span>
                            <div className="w-8 h-px bg-white/20 group-hover:w-12 transition-all duration-500" />
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Resume
