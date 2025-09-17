import React, { useState, useRef, useEffect } from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const currentRef = counterRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isVisible]);

    return (
        <div ref={counterRef} id='counter' className='padding-x-lg xl:mt-0 mt-32'>
            <div className='mx-auto grid-4-cols'>
                {counterItems.map((item, index) => (
                    <div key={item.label} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
                        <div className='counter-number text-white text-5xl font-bold mb-2'>
                            {isVisible ? (
                                <CountUp 
                                    suffix={item.suffix} 
                                    end={item.value}
                                    duration={2.5}
                                    delay={index * 0.2}
                                />
                            ) : (
                                <span>0{item.suffix}</span>
                            )}
                        </div>
                        <div className='text-white-50 text-lg'>{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter