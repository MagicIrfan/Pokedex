import React from "react";

interface ImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    loading?: 'eager' | 'lazy';
}

export const Image: React.FC<ImageProps> = ({
                                                src,
                                                alt = '',
                                                width,
                                                height,
                                                loading = 'lazy', // Default to lazy-loading
                                            }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
        />
    );
};