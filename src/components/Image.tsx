import React from "react";

interface ImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    loading?: 'eager' | 'lazy';
    className?: string;
}

export const Image: React.FC<ImageProps> = ({
                                                src,
                                                alt = '',
                                                width,
                                                height,
                                                loading = 'lazy', // Default to lazy-loading
                                                className = ""
                                            }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            className={className}
        />
    );
};