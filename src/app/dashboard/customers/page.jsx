"use client";
import { useState, useEffect } from "react";
import { Edit, Trash } from "lucide-react"; // Make sure to import these icons

import {
  addNewCustomer,
  getAllCustomers,
  customerSelectors
} from "@/application/reducers/customer-reducer";
import { useDispatch, useSelector } from "react-redux";
import AddCustomerPopup from "@/components/popups/AddCustomerPopup";
import Loader from "@/components/loaders/Loader"; // Import loader component

import {
  businessSelectors,
  getBusinesses,
} from "@/application/reducers/business-reducer";

const CustomerDetailsPage = () => {
  const dispatch = useDispatch();
  const { data: getCustomers, loading: getCustomersLoading, error: getCustomersError } = useSelector(customerSelectors.getAllCustomers);
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [editingCustomer, setEditingCustomer] = useState(null);



  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [isAddCustomerPopupOpen, setAddCustomerPopupOpen] = useState(false);

  const { data: getBusinessData, loading: getBusinessLoading, error: getBusinessError } = useSelector(businessSelectors.getBusinesses);


  useEffect(() => {
    console.log("dispacting det all customers");
    dispatch(getAllCustomers())
    dispatch(getBusinesses());
  }, [dispatch])


  console.log(getCustomers, "data--");
  console.log(getBusinessData, "business---");
  
  useEffect(() => {
    setCustomers(getCustomers);
  }, [getCustomers, setCustomers]);


  console.log(customers, "data--");


  const handleEdit = (customerId) => {
    setEditingCustomer(customerId);
  };

  const handleSaveEdit = async () => { };

  const handleCancelEdit = () => { };

  const handleDelete = async (customerId) => { };

  const handleAddCustomerClick = () => {
    setAddCustomerPopupOpen(true);
  };

  const handleAddCustomerClose = () => {
    setAddCustomerPopupOpen(false);
  };

  const handleAddCustomerSave = async (newCustomer) => {
    dispatch(addNewCustomer(newCustomer));
    handleAddCustomerClose();
    console.log(newCustomer, "new customer here");
    dispatch(getAllCustomers());
  };

  return (
    <div className=" border-black p-10 rounded h-full">
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

      {getCustomersLoading || getBusinessLoading ? (
        <div>
          {/* Display loader */}
          <Loader />
        </div>
      ) : (
        <div>
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
              {Array.isArray(getCustomers) && getCustomers.map((getCustomers) => (
                <tr key={getCustomers._id.$oid} className="border-b">
                  <td className="text-left py-2">{getCustomers.name}</td>
                  <td className="text-left py-2">{getCustomers.email}</td>
                  <td className="text-left py-2">{new Date(getCustomers.created_at.$date).toLocaleDateString()}</td>
                  <td className="text-left py-2">{getCustomers.phone}</td>
                  <td className="text-left py-2">
                    <button onClick={() => handleEdit(getCustomers._id.$oid)} className="text-blue-500 mr-2">
                      <Edit size={20} />
                    </button>
                    <button onClick={() => handleDelete(getCustomers._id.$oid)} className="text-red-500">
                      <Trash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>


          </table>

        </div>
      )}


      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        {Array.from(
          { length: Math.ceil(customers.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-2 mx-1 bg-palatteTeritary text-white rounded ${index + 1 === currentPage ? "bg-opacity-80" : ""
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
        businesses={getBusinessData} // Pass businesses data
      />

    </div>
  );
};

export default CustomerDetailsPage;
