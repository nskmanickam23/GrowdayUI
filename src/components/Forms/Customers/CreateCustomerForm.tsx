'use client'
import React, { useState } from 'react';

interface CreateBusinessFormProps {
    onSubmit: (formData: CustomerFormData) => void;
}

interface CustomerFormData {
    customer_name: string;
    customer_email?: string;
    customer_phone?: string;
}

const CreateCusomerCard: React.FC<CreateBusinessFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<CustomerFormData>({
        customer_name: '',
        customer_email: '',
        customer_phone:'',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className='p-[2%] bg-gray-200 rounded-md'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="customername" value={formData.customer_name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" name="customeremail" value={formData.customer_email} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="text" name="customerphone" value={formData.customer_phone} onChange={handleInputChange} />
                </label>
                <br />
                <button className='bg-gray-400 rounded-md' type="submit">Add customer</button>
            </form>
        </div>
    );
};

export default CreateCusomerCard;
