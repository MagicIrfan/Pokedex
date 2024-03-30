import React from 'react';

interface ImageContainerProps {
    className?: string;
    image: React.ReactNode;
    onClick?: () => void;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
                                                                  className = '',
                                                                  image,
                                                                  onClick = () => {},
                                                              }) => {
    const handleKeyPress = (event: React.KeyboardEvent) : void => {
        if (event.key === 'Enter' || event.key === ' ') {
            onClick();
        }
    };

    return (
        <div
            className={className}
            onClick={onClick}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
        >
            {image}
        </div>
    );
};