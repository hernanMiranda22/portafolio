import React from 'react';

const TechBubble = ({
    icon,
    name
}) => {
    return(
        <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700 text-[20px] lg:text-[16px]">
            <div className="box-border">
                {icon}
            </div>
                {name}
        </span>
    );
};

export default TechBubble;