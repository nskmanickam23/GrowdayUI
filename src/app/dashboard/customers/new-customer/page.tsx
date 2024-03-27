'use client'
import CreateBusinessForm from '@/components/Forms/Buisness/CreateBusinessForm';
import CreateCusomerCard from '@/components/Forms/Customers/CreateCustomerForm';
import axios from 'axios';
import React, { useState } from 'react';


interface CreateBusinessFormProps {
    onSubmit: (formData: CustomerFormData) => void;
}

interface CustomerFormData {
    customer_name: string;
    customer_email?: string;
    customer_phone?: string;
}

const CreateBusinessPage: React.FC = () => {
    const handleCreateBusiness = async (formData: CustomerFormData) => {
        try {
            const response = await axios.post('/create-business', formData);
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div className='bg-lightbg dark:bg-darkbg  p-[5%] text-gray-700 dark:text-gray-200'>
            <h1 className='font-bold md:text-2xl py-5'>Add new customer</h1>
            <CreateCusomerCard onSubmit={handleCreateBusiness} />
        </div>
    );
};

export default CreateBusinessPage;
