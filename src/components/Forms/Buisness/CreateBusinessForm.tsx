'use client'
import React, { useState } from 'react';

interface CreateBusinessFormProps {
    onSubmit: (formData: BusinessFormData) => void;
}

interface BusinessFormData {
    businessname: string;
    description: string;
}

const CreateBusinessForm: React.FC<CreateBusinessFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<BusinessFormData>({
        businessname: '',
        description: '',
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
                    Business Name:
                    <input type="text" name="businessname" value={formData.businessname} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
                </label>
                <br />
                <button className='bg-gray-400 rounded-md' type="submit">Create Business</button>
            </form>
        </div>
    );
};

export default CreateBusinessForm;
