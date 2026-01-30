import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import OptimizedImage from './OptimizedImage';

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const glowRef = useRef(null);
    const contentRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current || !glowRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update glow position
        gsap.to(glowRef.current, {
            left: x,
            top: y,
            duration: 0.3,
            ease: 'power2.out'
        });

        // Interactive border glow angle
        const mouseX = x - rect.width / 2;
        const mouseY = y - rect.height / 2;
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;
        cardRef.current.style.setProperty("--start", angle + 60);
    };

    useGSAP(() => {
        gsap.from(cardRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.2)',
        });
    }, []);

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="project-card group relative min-w-[300px] md:min-w-[380px] lg:min-w-[450px] max-w-[500px] flex-shrink-0 rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 card"
        >
            {/* Interactive Glow Background */}
            <div
                ref={glowRef}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            />

            {/* Image Container */}
            <div className="relative w-full h-[220px] md:h-[280px] overflow-hidden z-10">
                <OptimizedImage
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-black-100/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* View Project Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-3 bg-white text-black font-bold rounded-full transform hover:scale-105 active:scale-95 transition-all shadow-xl"
                    >
                        View Project
                    </a>
                </div>
            </div>

            {/* Content Container */}
            <div ref={contentRef} className="relative p-8 md:p-10 flex flex-col gap-6 z-10">
                <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-white transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed">
                        {project.desc}
                    </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10">
                    {project.tags.map((tag) => (
                        <div
                            key={tag.id}
                            className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <img
                                src={tag.path}
                                alt={tag.name}
                                className="w-4 h-4 object-contain brightness-0 invert opacity-70"
                            />
                            <span className="text-xs md:text-sm font-medium text-white/80">{tag.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Perspective Shadow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </div>
    );
};

export default ProjectCard;
