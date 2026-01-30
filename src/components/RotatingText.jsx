import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const RotatingText = ({ words }) => {
    const textRef = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const tl = gsap.timeline();

            tl.to(textRef.current, {
                y: -40,
                opacity: 0,
                rotationX: 90,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    setIndex((prev) => (prev + 1) % words.length);
                    // Reset slightly lower for entrance
                    gsap.set(textRef.current, { y: 40, opacity: 0, rotationX: -90 });
                },
            })
                .to(textRef.current, {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)", // Bouncy effect
                });

        }, 3500);

        return () => clearInterval(interval);
    }, [words]);

    return (
        <span className="inline-flex items-center relative h-[1.2em] overflow-hidden align-middle mx-2 px-1">
            <span className="flex items-center gap-2 px-1 py-1" ref={textRef}>
                <img
                    src={words[index].icon}
                    alt={words[index].text}
                    className="w-7 h-7 object-contain"
                />
                <span className="bg-gradient-to-r from-[#ffffff] via-[#f0f0f0] to-[#b0b0b0] bg-clip-text text-transparent font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                    {words[index].text}
                </span>
            </span>
        </span>
    );
};

export default RotatingText;
