import { useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import OptimizedImage from "../components/OptimizedImage";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = memo(() => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            if (card) {
                gsap.fromTo(card, {
                    y: 50, opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card, 
                        start: "top bottom-=100",
                        once: true, // Only animate once
                    },
                });
            }
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <OptimizedImage 
                                src="/images/project_1.png" 
                                alt="Ryde App Interface"
                                className="w-full h-full object-cover rounded-xl absolute inset-0"
                            />
                        </div>
                        <div className="text-content">
                            <h2>
                                Simplifying Social Security Management for Companies by SGK Kasif
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                A web application that facilitates, calculates,
                                monitors, and reports SGK processes for companies built with React.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#F5F0FF]">
                                <OptimizedImage
                                    src="/images/project_2.png"
                                    alt="Library Management Platform"
                                    className="w-full h-full object-contain rounded-xl"
                                />
                            </div>
                            <h2>Machine Learning-Powered Fake Message Detection Web App</h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#F0F8FF]">
                                <OptimizedImage 
                                    src="/images/project_3.png" 
                                    alt="YC Directory App"
                                    className="w-full h-full object-contain rounded-xl"
                                />
                            </div>
                            <h2>Innovative Platform for Website Issue Reporting in Latvia</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

AppShowcase.displayName = 'AppShowcase';

export default AppShowcase;