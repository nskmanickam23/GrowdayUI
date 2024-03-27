'use client'
import React, { useState } from 'react';

const EditProfile: React.FC = () => {
  

    const sendTemporaryPassword = () => {
        // Replace with your API call logic to send a temporary password
        console.log('Sending temporary password...');
    };

    const suspendCustomer = () => {
        // Replace with your API call logic to suspend the customer
        console.log('Suspending customer...');
    };

    const removeCustomer = () => {
        // Replace with your API call logic to remove the customer
        console.log('Removing customer...');
    };



    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Edit Customer Profile</h1>

            {/* Button to Send Temporary Password */}
            <button
                onClick={sendTemporaryPassword}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
            >
                Send Temporary Password
            </button>

            {/* Button to Suspend Customer */}
            <button
                onClick={suspendCustomer}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mr-2"
            >
                Suspend Customer
            </button>

            {/* Button to Remove Customer */}
            <button
                onClick={removeCustomer}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
                Remove Customer
            </button>
        </div>
    );
};

export default EditProfile;
