'use client'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';
import { editBusiness, getBusinesses } from "@/application/reducers/business-reducer";


const EditPage= () => {
  const dispatch = useDispatch();
  const businessesState = useSelector((state) => state.business);

  const [formData, setFormData] = useState({
    name: '',
    business_type: '',
    description: '',
    created_date: '',
    address: '',
    domain_url: '',
    business_url: '',
    created_by: ''
  });

  const params = useParams();

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  useEffect(() => {
    if (businessesState.data && Array.isArray(businessesState.data)) {
      const selectedBusiness = businessesState.data.find((business) => business._id.$oid === params.id[0]);

      if (selectedBusiness) {
        // Check if the created_date is an object with a $date property
        if (selectedBusiness.created_date && typeof selectedBusiness.created_date === 'object' && selectedBusiness.created_date.$date) {
          const dateObject = new Date(selectedBusiness.created_date.$date);

          // Check if the dateObject is valid
          if (!isNaN(dateObject.getTime())) {
            // If the date is valid, convert it to ISO 8601 format
            const isoDate = dateObject.toISOString();
            setFormData({
              name: selectedBusiness.name || '',
              business_type: selectedBusiness.business_type || '',
              description: selectedBusiness.description || '',
              created_date: isoDate || '',
              address: selectedBusiness.address || '',
              domain_url: selectedBusiness.domain_url || '',
              business_url: selectedBusiness.business_url || '',
              created_by: selectedBusiness.created_by || ''
            });
          } else {
            console.error("Invalid date format:", selectedBusiness.created_date.$date);
          }
        } else {
          console.error("Invalid date format:", selectedBusiness.created_date);
        }
      } else {
        console.log("Business not found with ID:", params.id[0]);
      }
    } else {
      console.log("No data available in businessesState");
    }
  }, [businessesState, params.id]);




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log(formData, "----form data----");

    dispatch(editBusiness(formData)); // Dispatch the editedBusinessData
  };
 
  return (
    <section>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Edit Your Business</h1>
        <form onSubmit={handleSubmit} className="">
          <div className='grid gap-5 grid-cols-12'>
            <div className='col-span-4'>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  id="description"
                  name="description"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 bg-lightbg dark:bg-darkbg w-full"
                  required
                />
              </div>
            </div>
            <div className='col-span-4'>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                  Created by
                </label>
                <input
                  id="description"
                  name="description"
                  value={formData.created_by}
                  onChange={handleChange}
                  className="mt-1 p-2 bg-lightbg dark:bg-darkbg w-full"
                  required
                />
              </div>
            </div>
            <div className='col-span-4'>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                  Created on
                </label>
                <input
                  id="description"
                  name="description"
                  value={formData.created_date}
                  onChange={handleChange}
                  className="mt-1 p-2 bg-lightbg dark:bg-darkbg w-full"
                  required
                />
              </div>
            </div>
            {/* Business Description */}
            <div className='col-span-6'>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                  Business Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className='col-span-6'>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
            </div>

            {/* Business Type */}
            <div className='col-span-4'>
              <div className="mb-4">
                <label htmlFor="business_type" className="block text-sm font-medium text-gray-600">
                  Business Type
                </label>
                <input
                  type="text"
                  id="business_type"
                  name="business_type"
                  value={formData.business_type}
                  onChange={handleChange}
                  className="mt-1 p-2  border rounded-md  w-full"
                  required
                />
              </div>
            </div>


            {/* Domain URL */}
            <div className='col-span-4'>
              <div className="mb-4">
                <label htmlFor="domain_url" className="block text-sm font-medium text-gray-600">
                  Domain URL
                </label>
                <input
                  type="text"
                  id="domain_url"
                  name="domain_url"
                  value={formData.domain_url}
                  onChange={handleChange}
                  className="mt-1 p-2  border rounded-md  w-full"
                  required
                />
              </div>
            </div>

            {/* Business URL */}
            <div className='col-span-4'>
              <div className="mb-4">
                <label htmlFor="business_url" className="block text-sm font-medium text-gray-600">
                  Business URL
                </label>
                <input
                  type="text"
                  id="business_url"
                  name="business_url"
                  value={formData.business_url}
                  onChange={handleChange}
                  className="mt-1 p-2  border rounded-md  w-full"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditPage;