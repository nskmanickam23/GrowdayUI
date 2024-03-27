// CustomerCard.tsx
import React from 'react';

interface CustomerCardProps {
    name: string;
    description: string;
    link: string;
    lastLogin: string;
    createdDate: string;
    totalLogins: number;
    createdBy: string;
    isSelf: boolean;
    // Add any other fields related to customer activity
}

const CustomerCard: React.FC<CustomerCardProps> = ({
    name,
    description,
    link,
    lastLogin,
    createdDate,
    totalLogins,
    createdBy,
    isSelf
}) => {
    return (
        <div className='p-5 m-5 bg-gray-200 rounded-md'>
            <h2 className='font-bold'>{name}</h2>
            <p>{description}</p>
            <p>Last Login: {lastLogin}</p>
            <p>Created Date: {createdDate}</p>
            <p>Total Logins: {totalLogins}</p>
            <p>Created By: {createdBy}</p>
            <p>{isSelf ? 'Self' : 'Member'}</p>
            {/* Add rendering for other customer activity fields as needed */}
            {/* You can also include a link to navigate to customer details */}
            <a href={link}>View Details</a>
        </div>
    );
}

export default CustomerCard;
