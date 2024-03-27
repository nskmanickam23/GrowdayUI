import React, { useState } from 'react';

interface AddCustomerPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (newCustomer: any) => void;
}

const AddCustomerPopup: React.FC<AddCustomerPopupProps> = ({ isOpen, onClose, onSave }) => {
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        business_ids: [],
        created_at: new Date().toISOString(),
    });

    const handleSave = () => {
        onSave(newCustomer);
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
                    Password:
                    <input
                        type="password"
                        value={newCustomer.password}
                        onChange={(e) => setNewCustomer({ ...newCustomer, password: e.target.value })}
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
