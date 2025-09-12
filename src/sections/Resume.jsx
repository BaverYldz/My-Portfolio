import React from 'react'

const Resume = () => {
    return (
        <div id='resume' className='mt-10 flex-center'>
            <div className='flex flex-col items-center gap-5'>
                <div className='font-semibold md:text-4xl text-2xl text-center mt-2'>
                    My Resume
                </div>

                <div className='flex flex-col sm:flex-row gap-4 mt-6'>

                    <a
                        href="/cv/CV-BawerTR.pdf"
                        download="Baver_Yildiz_CV_TR.pdf"
                        className="group relative inline-flex items-center justify-center px-6 py-3 bg-black-100 backdrop-blur-sm text-white rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 min-w-[160px]"
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-white/80">CV Türkçe</span>
                    </a>


                    <a
                        href="/cv/CV-BawerENG.pdf"
                        download="Baver_Yildiz_CV_EN.pdf"
                        className="group relative inline-flex items-center justify-center px-6 py-3 bg-black-100 backdrop-blur-sm text-white rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 min-w-[160px]"
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-white/80">CV English</span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Resume