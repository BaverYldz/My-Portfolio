import { useState, useCallback } from 'react';

const OptimizedImage = ({ 
    src, 
    webpSrc, 
    alt, 
    className = '', 
    width, 
    height,
    loading = 'lazy',
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    ...props 
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleLoad = useCallback(() => {
        setImageLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        setImageError(true);
    }, []);

    return (
        <div className={`relative ${className}`}>
            {!imageLoaded && !imageError && (
                <div 
                    className="absolute inset-0 bg-gray-200 animate-pulse rounded"
                    style={{ width, height }}
                />
            )}
            
            <picture>
                {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
                <img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading={loading}
                    sizes={sizes}
                    onLoad={handleLoad}
                    onError={handleError}
                    className={`transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    } ${className}`}
                    {...props}
                />
            </picture>
        </div>
    );
};

export default OptimizedImage;
