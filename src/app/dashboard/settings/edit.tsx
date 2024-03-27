import React, { useState } from 'react';

const EditProfilePage = () => {
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: '',
        secondarymail: '',
    });
    React.useEffect(() => {
        // Fetch user data from the mock API on component mount
        fetchUserData();
    }, []);
    const fetchUserData = async () => {
        try {
            const response = await fetch('http://localhost:3003/userData');
            const userData = await response.json();
            setFormData(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.newPassword === formData.confirmPassword) {
            console.log('Passwords match. Proceeding with update.');
            // Handle password update logic
            try {
                const response = await fetch('http://localhost:3003/userData', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    console.log('User data updated successfully.');
                    setFormData({
                        newPassword: '',
                        confirmPassword: '',
                        secondarymail: formData.secondarymail, // Preserve secondary mail
                    });
                } else {
                    console.error('Failed to update user data.');
                }
            } catch (error) {
                console.error('Error updating user data:', error);
            }
        } else {
            console.log('Passwords do not match. Please try again.');
            // Inform the user that passwords do not match
        }
    };

    const handleDelete = () => {
        console.log('Deleting profile...');
        // Handle delete profile logic here
    };
    const handleSaveSecondaryEmail = async() => {
        // Handle save secondary email logic here
        try {
            const response = await fetch('http://localhost:3003/userData', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Secondary email saved successfully.');
                setFormData({
                    newPassword: '',
                    confirmPassword: '',
                    secondarymail: '', // Reset secondary mail
                });
            } else {
                console.error('Failed to save secondary email.');
            }
        } catch (error) {
            console.error('Error saving secondary email:', error);
        }
    };

    return (
        <>
            <div className="flex  mx-auto ">
                <div className="w-1/3" >
                    <h2 className="text-2xl font-bold mb-4  ">Password</h2>
                    <p className="text-gray-600 text-sm mb-4">For security reasons, its&apos;s recommended to reset your password regularly. You can reset your password by clicking on the Change your password.</p>
                </div>
                <div className="w-2/3">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="text-gray-600 text-sm block">Password:</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md p-2 w-1/3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-600 text-sm block">Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md p-2 w-1/3"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
                        >
                            Save Password
                        </button>
                    </form>
                </div>
            </div>
            {/* Seperator */}
            <div className="border-t border-gray-500 my-8"></div>

            {/* Secondary Email */}
            <div className="flex mx-auto mb-8">
                <div className="w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Secondary Email</h2>
                    <p className="text-gray-600 text-sm mb-4">Add a secondary email for additional security and account recovery purposes.</p>
                </div>
                <div className="w-2/3 "> {/* Flex container set to column direction */}
                    <label className="text-gray-600 text-sm block">Secondary mail</label>
                    <input
                        type="email"
                        name="secondarymail"
                        value={formData.secondarymail}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-1/3 mb-2 flex" 
                    />
                    {/* Save Secondary Email button */}
                    <button
                        onClick={handleSaveSecondaryEmail}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
                    >
                        Save Secondary Email
                    </button>
                </div>
            </div>

            {/* Seperator */}
            <div className="border-t border-gray-500 my-8 "></div>

            {/* Delete Account */}
            <div className="flex mx-auto mb-8">
            <div className="w-1/3">
                <h2 className="text-2xl font-bold mb-4">Delete Account</h2>
                <p className="text-gray-600 text-sm mb-4">Are you sure you want to delete your account? This action cannot be undone.</p>
            </div>
            <div className="w-2/3 "> {/* Flex container set to column direction */}
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Delete Account
                </button>
            </div>
        </div>


        </>
    );
};

export default EditProfilePage;
