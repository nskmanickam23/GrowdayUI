import React, { useState, ReactNode, MouseEventHandler } from 'react';

interface CustomTooltipProps {
    content: string;
    children: ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ content, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter: MouseEventHandler = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave: MouseEventHandler = () => {
        setShowTooltip(false);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {showTooltip && (

                <div className="absolute bg-white text-sm font-light dark:bg-gray-800 p-2 rounded border border-gray-300 dark:border-gray-700 shadow-md right-0 transform translate-x-full">
                    {content}
                </div>
            )}
        </div>
    );
};

export default CustomTooltip;
