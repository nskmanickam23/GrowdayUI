"use client";
import React, { useState, useEffect } from "react";
import { Edit, Trash } from "lucide-react"; // Make sure to import these icons
import {
  fetchCustomers,
  deleteCustomer,
  Customer,
} from "@/utils/api/customerAPI";

import {
  addNewCustomer,
  getAllCustomers,
} from "@/application/reducers/customer-reducer";
import { useDispatch, useSelector } from "react-redux";
import AddCustomerPopup from "@/components/popups/AddCustomerPopup";

// export interface CustomerType {
//     _id:any;
//     name: string;
//     email: string;
//     password: string;
//     phone: string;
//     business_ids: string[];
//     created_at: any;
//     User_ids: any[];
// }

const CustomerDetailsPage = () => {
  const dispatch = useDispatch();

  const customerState = useSelector((state) => state.customer);
  const [customers, setCustomers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [isAddCustomerPopupOpen, setAddCustomerPopupOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  useEffect(() => {
    setCustomers(Object.values(customerState.data));
  }, [customerState]);

  const handleEdit = (customerId) => {
    setEditingCustomer(customerId);
  };

  const handleSaveEdit = async () => {};

  const handleCancelEdit = () => {};

  const handleDelete = async (customerId) => {};

  const handleAddCustomerClick = () => {
    setAddCustomerPopupOpen(true);
  };

  const handleAddCustomerClose = () => {
    setAddCustomerPopupOpen(false);
  };

  const handleAddCustomerSave = async (newCustomer) => {
    dispatch(addNewCustomer(newCustomer));
    handleAddCustomerClose();
    dispatch(getAllCustomers());
  };

  return (
    <div className=" border-black p-10 rounded">
      <div className="flex flex-row pb-4 mb-5 ">
        <div>
          <h1 className="text-xl font-bold">All customers data</h1>
          <h1 className="font-extralight text-sm text-gray-500">
            See all your customers here!
          </h1>
        </div>

        <div className="self-end  ml-auto ">
          <button
            className="flex items-center bg-addNewBtn text-white px-4 py-2 rounded"
            onClick={handleAddCustomerClick}
          >
            <span className="mr-2">Create New Customer</span>
          </button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Customer Name</th>
            <th className="text-left py-2">Email</th>
            <th className="text-left py-2">Created Date</th>
            <th className="text-left py-2">Phone</th>
            <th className="text-left py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((customer, index) => (
            <tr key={`${customer._id}-${index}`} className="border-b">
              <td className="py-4">{customer.name}</td>
              <td className="py-4">{customer.email}</td>
              <td className="py-4">
                {customer.created_at && customer.created_at.$date
                  ? new Date(customer.created_at.$date).toLocaleDateString()
                  : ""}
              </td>
              <td className="py-4">{customer.phone}</td>
              <td className="py-4 space-x-2">
                {editingCustomer === customer._id ? (
                  <>
                    <button className="text-sm" onClick={handleSaveEdit}>
                      Save
                    </button>
                    <button className="text-sm" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="text-sm"
                      onClick={() => handleEdit(customer._id)}
                    >
                      <Edit size={14} />
                    </button>
                    <button
                      className="text-sm"
                      onClick={() => handleDelete(customer._id)}
                    >
                      <Trash size={14} />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        {Array.from(
          { length: Math.ceil(customers.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-2 mx-1 bg-palatteTeritary text-white rounded ${
                index + 1 === currentPage ? "bg-opacity-80" : ""
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      <AddCustomerPopup
        isOpen={isAddCustomerPopupOpen}
        onClose={handleAddCustomerClose}
        onSave={handleAddCustomerSave}
      />
    </div>
  );
};

export default CustomerDetailsPage;
