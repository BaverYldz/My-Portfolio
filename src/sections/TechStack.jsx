import React, { memo } from 'react'
import TitleHeader from '../components/TitleHeader'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { techStackImgs } from '../constants/index'
import OptimizedImage from '../components/OptimizedImage'

const TechStackCard = memo(({ techStackIcon }) => (
    <div
        className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
    >
        <div className="tech-card-animated-bg" />
        <div className="tech-card-content">
            <div className="tech-icon-wrapper">
                <OptimizedImage 
                    src={techStackIcon.imgPath} 
                    alt={techStackIcon.name}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="padding-x w-full">
                <p>{techStackIcon.name}</p>
            </div>
        </div>
    </div>
));

TechStackCard.displayName = 'TechStackCard';

const TechStack = memo(() => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
            y: 20, 
            opacity: 1, 
            duration: 0.5, 
            ease: 'power2.inOut', 
            stagger: 0.1, 
            scrollTrigger: {
                trigger: '#skills', 
                start: 'top center',
                once: true, // Only animate once
            }
        })
    })

    return (
        <div id='skills' className='flex-center section-padding'>
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="🤝 The Skills I Bring to the Table" 
                />

                <div className='tech-grid'>
                    {techStackImgs.map((techStackIcon) => (
                        <TechStackCard 
                            key={techStackIcon.name}
                            techStackIcon={techStackIcon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
});

TechStack.displayName = 'TechStack';

export default TechStack