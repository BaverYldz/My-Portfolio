import { useEffect, useState } from 'react';

export const usePerformance = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check device performance indicators
    const checkPerformance = () => {
      const hardwareConcurrency = navigator.hardwareConcurrency || 2;
      const memory = navigator.deviceMemory || 2; // In GB
      const connection = navigator.connection;
      
      let score = 0;
      
      // CPU cores score
      if (hardwareConcurrency >= 8) score += 3;
      else if (hardwareConcurrency >= 4) score += 2;
      else score += 1;
      
      // Memory score
      if (memory >= 8) score += 3;
      else if (memory >= 4) score += 2;
      else score += 1;
      
      // Connection score
      if (connection) {
        if (connection.effectiveType === '4g') score += 2;
        else if (connection.effectiveType === '3g') score += 1;
      } else {
        score += 2; // Assume good connection if not available
      }
      
      // If total score is less than 5, consider it low performance
      setIsLowPerformance(score < 5);
    };

    checkPerformance();
  }, []);

  return { isLowPerformance };
};

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, isIntersecting];
};

export const useImagePreloader = (imageSources) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!imageSources?.length) {
      setIsLoading(false);
      return;
    }

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      try {
        const results = await Promise.allSettled(
          imageSources.map(src => loadImage(src))
        );
        
        const successful = results
          .filter(result => result.status === 'fulfilled')
          .map(result => result.value);
        
        setLoadedImages(new Set(successful));
      } catch (error) {
        console.warn('Some images failed to load:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllImages();
  }, [imageSources]);

  return { loadedImages, isLoading };
};
