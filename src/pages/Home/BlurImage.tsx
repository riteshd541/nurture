import React, { useState } from "react";

export function BlurImage({
  src,
  alt,
  className,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      
      <div
        className={`
          absolute inset-0 bg-gray-700 
          animate-pulse 
          ${loaded ? "opacity-0" : "opacity-100"}
          transition-opacity duration-500
        `}
      />

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-full object-cover 
          transition-all duration-700
          ${loaded ? "blur-0 opacity-100" : "blur-xl opacity-0"}
        `}
        {...rest}
      />
    </div>
  );
}
