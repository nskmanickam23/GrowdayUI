"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";

import BusinessCard from "@/components/cards/businessCard";
import AllBusinessLoader from "@/components/loaders/AllBusinessLoader";
import AddBusinessPopup from "@/components/popups/AddBusinessPopup";

import { ChevronDown, Filter, Search } from "lucide-react";
import {
  getBusinesses,
  saveBusiness,
} from "@/application/reducers/business-reducer";

import { Business, BusinessPageProps } from "@/utils/types/businessTypes";

const BusinessPage = ({ businesses }) => {
  const dispatch = useDispatch();
  const businessesState = useSelector((state) => state.business);
  const [loadedBusinesses, setLoadedBusinesses] = useState([]);
  const [isAddBusinessPopupOpen, setAddBusinessPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterActive, setFilterActive] = useState(null);
  const [isFilterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  useEffect(() => {
    setLoadedBusinesses(Object.values(businessesState.data));

    setLoading(businessesState.loading);
  }, [businessesState]);

  const handleAddBusinessClick = () => {
    setAddBusinessPopupOpen(true);
  };

  const handleAddBusinessClose = () => {
    setAddBusinessPopupOpen(false);
  };

  const handleAddBusinessSave = (newBusiness) => {
    dispatch(saveBusiness(newBusiness));
    dispatch(getBusinesses());
    handleAddBusinessClose();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle filter change (Active/Inactive/All)
  const handleFilterChange = (isActive) => {
    setFilterActive(isActive);
    setFilterDropdownOpen(false); // Close the dropdown after selecting an option
  };

  const handleActivateDeactivate = () => {
    dispatch(getBusinesses());
  };

  const filteredBusinesses = loadedBusinesses.filter((businessesState) => {
    const name = businessesState.name || ""; // Ensure name is defined
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterActive === null || businessesState?.isActive === filterActive;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="">
      <div className="flex flex-col md:flex-row  border-b dark:border dark:border-darkborder">
        <div className="flex flex-row items-center px-5">
          <div className="">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search businesses..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-2 py-1 bg-transparent  focus:outline-none focus:border-primary "
          />
        </div>
        <div className="self-center md:self-end my-5 ml-auto flex items-center">
          <div className="flex flex-row items-center px-5">
            <Filter /> <span className="font-bold pl-1 py-2">Filter</span>
          </div>
          <div className="px-5">
            <button
              onClick={() => setFilterDropdownOpen(!isFilterDropdownOpen)}
              className={`bg-transparent flex flex-row items-center text-black px-4 py-2 rounded ml-2`}
            >
              <ChevronDown />{" "}
              {filterActive === true
                ? "Active"
                : filterActive === false
                ? "Inactive"
                : "All"}
            </button>
            {isFilterDropdownOpen && (
              <div className="absolute  bg-white border rounded-md shadow-md mt-1">
                <button
                  onClick={() => handleFilterChange(true)}
                  className="block px-4 py-2 w-full text-left"
                >
                  Active
                </button>
                <button
                  onClick={() => handleFilterChange(false)}
                  className="block px-4 py-2 w-full text-left"
                >
                  Inactive
                </button>
                <button
                  onClick={() => handleFilterChange(null)}
                  className="block px-4 py-2 w-full text-left"
                >
                  All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row pb-[1%] p-5 mx-5">
        <div className="self-center">
          <h1 className="font-black text-xl">All Businesses</h1>
          <h1 className="font-extralight text-sm text-gray-500">
            See all your businesses here!
          </h1>
        </div>
        <div className="self-center md:self-end my-5 ml-auto">
          {loading ? (
            <div>
              {/* Display loader */}
              {/* <AllBusinessLoader /> */}
            </div>
          ) : loadedBusinesses.length > 0 ? (
            <button
              onClick={handleAddBusinessClick}
              className="bg-addNewBtn text-white px-4 py-2 rounded"
            >
              Create New Business
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {loading ? (
        <div>
          {/* Display loader */}
          <AllBusinessLoader />
        </div>
      ) : (
        <div>
          {!loading && filteredBusinesses.length > 0 ? (
            <div className="grid gap-7 grid-cols-1 md:grid-cols-3 px-5 pb-10 ml-5">
                {filteredBusinesses.map((business, index) => (
                  <div key={business.id || index}>
                    <BusinessCard
                      id={business._id?.$oid || ''}
                      name={business.name || ''}
                      description={business.description || ''}
                      domain_url={business.business_url || ''}
                      link={`/dashboard/business/${business._id?.$oid || ''}`}
                      status={business?.status}
                      address={business?.address}
                      onStatusToggle={() => handleActivateDeactivate()} // Pass onStatusToggle function
                    />

                  </div>
                ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-[10%] m-5 p-20 border-dotted rounded-md border-lightborder dark:border-darkborder border-[4px]">
              <h2 className="mb-5 font-light text-xl">
                You don&apos;t have any business created yet
              </h2>
              <button
                onClick={handleAddBusinessClick}
                className=" bg-palatteTeritary text-white px-4 py-2 rounded"
              >
                New Business
              </button>
            </div>
          )}
        </div>
      )}
      {/* New Business Popup */}
      <AddBusinessPopup
        isOpen={isAddBusinessPopupOpen}
        onClose={handleAddBusinessClose}
        onSave={handleAddBusinessSave}
      />
    </div>
  );
};

export default BusinessPage;
