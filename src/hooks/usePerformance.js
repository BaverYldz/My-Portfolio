import { useEffect, useState } from 'react';

// IntersectionObserver hook for lazy loading
export const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [targetRef, setTargetRef] = useState(null);

    useEffect(() => {
        if (!targetRef) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, {
            threshold: 0.1,
            rootMargin: '50px',
            ...options
        });

        observer.observe(targetRef);

        return () => observer.disconnect();
    }, [targetRef, options]);

    return [setTargetRef, isIntersecting];
};

// Image preloader hook
export const useImagePreloader = (imageSources) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        if (!imageSources?.length) {
            setImagesLoaded(true);
            return;
        }

        let loadedCount = 0;
        const totalImages = imageSources.length;

        const imagePromises = imageSources.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === totalImages) {
                        setImagesLoaded(true);
                    }
                    resolve();
                };
                img.onerror = reject;
                img.src = src;
            });
        });

        Promise.allSettled(imagePromises);
    }, [imageSources]);

    return imagesLoaded;
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
    useEffect(() => {
        if ('performance' in window) {
            // Monitor paint times
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.name === 'first-contentful-paint') {
                        console.log('FCP:', entry.startTime);
                    }
                    if (entry.name === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                    }
                }
            });

            observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

            return () => observer.disconnect();
        }
    }, []);
};
