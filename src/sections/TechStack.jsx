import React, { memo } from 'react'
import TitleHeader from '../components/TitleHeader'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { techStackImgs } from '../constants/index'
import OptimizedImage from '../components/OptimizedImage'

const TechStackCard = memo(({ techStackIcon }) => (
    <div className="tech-card-simple">
        <div className="tech-icon-simple">
            <OptimizedImage
                src={techStackIcon.imgPath}
                alt={techStackIcon.name}
                className="w-8 h-8 object-contain"
                loading="lazy"
            />
        </div>
        <span className="tech-name-simple">{techStackIcon.name}</span>
    </div>
));

TechStackCard.displayName = 'TechStackCard';

const TechStack = memo(() => {
    useGSAP(() => {
        gsap.fromTo('.tech-card-simple',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top 70%',
                    once: true,
                }
            }
        );
    }, []);

    return (
        <div id='skills' className='section-padding flex-center'>
            <div className='w-full max-w-6xl mx-auto px-5 md:px-10'>
                <TitleHeader
                    title="Tech Stack"
                    sub="Technologies I work with"
                />

                <div className='tech-grid-simple mt-12'>
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