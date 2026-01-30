import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { myProjects } from '../constants';
import TitleHeader from '../components/TitleHeader';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        dragFree: true,
        align: 'center',
        containScroll: 'trimSnaps'
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setActiveIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(true);
        setCanScrollNext(true);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    return (
        <section className="py-32 relative overflow-hidden" id="work">
            <div className="container mx-auto px-5 md:px-10 text-center">
                <TitleHeader title="My Selected Projects" sub="Case Studies" />
            </div>

            <div className="relative mt-20 group/carousel max-w-[1600px] mx-auto">
                {/* Lateral Fades - Balanced to not block buttons */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-4 md:px-12 z-30 pointer-events-none">
                    <button
                        onClick={scrollPrev}
                        className="p-5 md:p-7 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 pointer-events-auto hover:bg-zinc-100 hover:scale-110 active:scale-95"
                        aria-label="Previous project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>

                    <button
                        onClick={scrollNext}
                        className="p-5 md:p-7 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 pointer-events-auto hover:bg-zinc-100 hover:scale-110 active:scale-95"
                        aria-label="Next project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>

                {/* Embla Viewport */}
                <div className="overflow-hidden cursor-grab active:cursor-grabbing px-[5%] md:px-[15%]" ref={emblaRef}>
                    <div className="flex gap-8 md:gap-12 pl-[10%] pr-[10%]">
                        {myProjects.map((project, index) => (
                            <ProjectCard
                                key={`${project.title}-${index}`}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Pagination Status */}
                <div className="flex justify-center items-center gap-6 mt-16 px-4">
                    <div className="h-[1px] flex-grow max-w-[100px] bg-white/10" />
                    <div className="flex gap-4">
                        {myProjects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`group relative h-2 rounded-full transition-all duration-500 ${activeIndex === index ? 'w-16 bg-white' : 'w-4 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="h-[1px] flex-grow max-w-[100px] bg-white/10" />
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />
        </section>
    );
};

export default Projects;
