import React, { useState } from 'react';

interface AddCustomerPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (newCustomer: any) => void;
    businesses: any[]; // Add businesses prop
}

const AddCustomerPopup: React.FC<AddCustomerPopupProps> = ({ isOpen, onClose, onSave, businesses }) => {
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        business_ids: '', // Specify the type explicitly as string
        created_at: new Date().toISOString(),
    });

    const handleSave = () => {
        // Convert business_ids to string if it's an array
        const businessIdsAsString = Array.isArray(newCustomer.business_ids) ? newCustomer.business_ids.join(', ') : newCustomer.business_ids;
        onSave({ ...newCustomer, business_ids: businessIdsAsString });
        onClose();
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white dark:bg-darkbg p-10 rounded-md">
                <h2 className="text-lg font-bold mb-4">Add Customer</h2>
                <label className="block mb-2">
                    Name:
                    <input
                        type="text"
                        value={newCustomer.name}
                        onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                </label>
                <label className="block mb-2">
                    Email:
                    <input
                        type="email"
                        value={newCustomer.email}
                        onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                </label>
                <label className="block mb-2">
                    Phone:
                    <input
                        type="text"
                        value={newCustomer.phone}
                        onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                </label>
                <label className="block mb-2">
                    Business:
                    <select
                        value={newCustomer.business_ids}
                        onChange={(e) => setNewCustomer({ ...newCustomer, business_ids: e.target.value })}
                        className="border p-2 rounded w-full"
                    >
                        <option value="">Select Business</option>
                        {Array.isArray(businesses) && businesses.map(business => (
                            <option key={business._id.$oid} value={business._id.$oid}>{business.name}</option>
                        ))}
                    </select>
                </label>
                <div className="flex justify-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleSave}>
                        Save
                    </button>
                    <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCustomerPopup;
