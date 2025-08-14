import { memo, useState, useCallback } from 'react';
import { useIntersectionObserver } from '../hooks/usePerformance';

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  style = {},
  loading = 'lazy',
  placeholder = '/images/placeholder.jpg',
  ...props 
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '100px' 
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  const shouldLoad = isIntersecting || loading === 'eager';
  const imageSrc = hasError ? placeholder : src;

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      style={style}
      {...props}
    >
      {shouldLoad && (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={imageSrc}
            alt={alt}
            className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            style={style}
            onLoad={handleLoad}
            onError={handleError}
            loading={loading}
            decoding="async"
          />
        </>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
