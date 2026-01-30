import React, { memo, lazy, Suspense, useState, useEffect } from 'react'
import CanvasLoader from '../components/CanvasLoader'

import Button from '../components/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const HeroExperience = lazy(() => import('../components/HeroModels/HeroExperience'))
import RotatingText from '../components/RotatingText'
import { rotatingTextWords } from '../constants'


const Hero = memo(() => {
    const [showExperience, setShowExperience] = useState(false);

    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    });

    useEffect(() => {
        // Defer 3D model loading to prioritize text animation
        const timer = setTimeout(() => {
            setShowExperience(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id='hero' className='relative overflow-hidden'>
            {/* <div className='absolute top-0 left-0 z-10'>
                <img src='/images/bg.png' alt='background' />
            </div> */}

            <div className='hero-layout'>
                {/* Left Section*/}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-35 px-5'>
                    <div className='flex flex-col gap-5'>
                        <div className="hero-text">
                            <h1>
                                Hi! I'm Omer Bawer.

                            </h1>
                            <h1>a Software Engineer</h1>
                            <h1>that crafting <RotatingText words={rotatingTextWords} /><br />web experiences</h1>

                        </div>
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                            Turning ideas into scalable, production-ready web products.

                        </p>
                        <Button
                            className='md:w-80 md:h-16 w-64 mt-3'
                            href='#work'
                            text='See my Work'
                        />
                    </div>

                </header>

                {/* Right Section */}
                <figure>
                    <div className='hero-3d-layout'>
                        <Suspense fallback={<CanvasLoader />}>
                            {showExperience && <HeroExperience />}
                        </Suspense>
                    </div>
                </figure>
            </div>


        </section>
    )
});

Hero.displayName = 'Hero';

export default Hero