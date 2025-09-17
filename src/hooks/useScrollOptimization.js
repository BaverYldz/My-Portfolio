import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for optimized scroll handling with requestAnimationFrame
 */
export const useOptimizedScroll = (callback) => {
    const requestIdRef = useRef();
    const callbackRef = useRef(callback);

    // Update callback ref when callback changes
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const handleScroll = useCallback(() => {
        if (requestIdRef.current) {
            cancelAnimationFrame(requestIdRef.current);
        }

        requestIdRef.current = requestAnimationFrame(() => {
            callbackRef.current();
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (requestIdRef.current) {
                cancelAnimationFrame(requestIdRef.current);
            }
        };
    }, [handleScroll]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (requestIdRef.current) {
                cancelAnimationFrame(requestIdRef.current);
            }
        };
    }, []);
};

/**
 * Custom hook for intersection observer with performance optimizations
 */
export const useIntersectionObserver = (callback, options = {}) => {
    const elementRef = useRef();
    const callbackRef = useRef(callback);

    // Update callback ref when callback changes
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                callbackRef.current(entries);
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
                ...options
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
            observer.disconnect();
        };
    }, [options]);

    return elementRef;
};