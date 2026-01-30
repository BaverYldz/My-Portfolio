import React, { useRef } from 'react';
import { expCards } from '../constants';
import TitleHeader from '../components/TitleHeader';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.experience-card');
        const dots = gsap.utils.toArray('.timeline-dot');
        const path = lineRef.current;
        if (!path) return;

        const length = path.getTotalLength();

        // Set initial path state
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        // Animate the vertical line drawing
        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 20%",
                end: "bottom 80%",
                scrub: true,
            }
        });

        cards.forEach((card, i) => {
            const isEven = i % 2 === 0;

            // Card slide and fade
            gsap.fromTo(card,
                {
                    x: isEven ? 100 : -100,
                    opacity: 0,
                    scale: 0.95
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Dot pop-in
            if (dots[i]) {
                gsap.fromTo(dots[i],
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // List items stagger
            const listItems = card.querySelectorAll('.experience-list-item');
            if (listItems.length > 0) {
                gsap.fromTo(listItems,
                    { x: isEven ? 20 : -20, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 70%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="px-5 md:px-10 py-24 relative overflow-hidden" id="experience">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <TitleHeader title="My Professional Journey" sub="Experience" />

            <div className="max-w-6xl mx-auto relative mt-16">
                {/* SVG Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-8 transform md:-translate-x-1/2 z-0 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 40 1000" preserveAspectRatio="none" className="h-full w-full">
                        <path
                            d="M 20 0 L 20 1000"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="2"
                            fill="none"
                        />
                        <path
                            ref={lineRef}
                            d="M 20 0 L 20 1000"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>

                <div className="flex flex-col gap-20 md:gap-32">
                    {expCards.map((exp, index) => (
                        <div
                            key={index}
                            className={`experience-card relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content Side */}
                            <div className="flex-1 w-full md:w-auto ml-12 md:ml-0 z-10">
                                <div className={`group relative flex flex-col gap-6 p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/30 transition-all duration-500 shadow-2xl ${index % 2 === 0 ? 'md:text-right md:items-end' : 'md:text-left md:items-start'
                                    }`}>

                                    {/* Spotlight Hover Effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className={`flex flex-col gap-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                        <div className="flex items-center gap-4">
                                            {index % 2 !== 0 && (
                                                <div className="w-16 h-16 p-2 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                    <img src={exp.logoPath} alt="logo" className="w-full h-full object-contain" />
                                                </div>
                                            )}
                                            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{exp.title}</h3>
                                                <div className={`flex flex-col md:flex-row gap-1 md:gap-3 text-white/40 font-medium tracking-wider uppercase text-xs mt-1 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                                    <span>{exp.date}</span>
                                                    <span className="hidden md:inline">•</span>
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                            {index % 2 === 0 && (
                                                <div className="w-16 h-16 p-2 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                    <img src={exp.logoPath} alt="logo" className="w-full h-full object-contain" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    <ul className={`flex flex-col gap-4 text-white/70 text-sm md:text-base leading-relaxed ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                                        }`}>
                                        {exp.responsibilities.map((item, i) => (
                                            <li key={i} className={`experience-list-item opacity-0 flex items-start gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'md:text-left'}`}>
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Timeline Node */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-white transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)] timeline-dot">
                                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
                            </div>

                            {/* Empty space for opposite side */}
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
