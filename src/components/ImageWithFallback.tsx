import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Travel scene',
  fallbackTitle,
  className = '',
  ...rest
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#163A32] via-[#224D43] to-[#202522] p-4 text-center text-white ${className}`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F28C45_1px,transparent_1px)] [background-size:16px_16px]" />
        <Compass className="h-8 w-8 text-[#F28C45] mb-2 animate-pulse" />
        <p className="text-xs font-medium tracking-wide text-white/90">
          {fallbackTitle || alt || 'Roam Tribe Adventure'}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse flex items-center justify-center">
          <Compass className="h-6 w-6 text-neutral-400" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...rest}
      />
    </div>
  );
};
