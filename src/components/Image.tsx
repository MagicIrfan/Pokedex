import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}

export const Image: React.FC<ImageProps> = ({
                                                src,
                                                alt = '',
                                                width,
                                                height,
                                                className = ""
                                            }) => {
    return (
        <LazyLoadImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    );
};