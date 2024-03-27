'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/common/Navbar/Navbar';
import { getBusinesses } from '@/application/reducers/business-reducer';


interface Business {
    name: string;
    description: string;
    domain_url: string;
    created_date: {
        $date: string; // Assuming it's a string, adjust as needed
    };
    address: string; // Assuming address is also present
    business_type: string; // Assuming business_type is also present
    business_url: string; // Assuming business_url is also present
    created_by: string; // Assuming created_by is also present
    status: boolean; // Assuming status is also present
    User_ids?: { $oid: string }[]; // Assuming User_ids is an array of objects with $oid property
}


const Page = ({ params }: { params: { slug: string } }) => {
    const dispatch = useDispatch();
    const businessesState = useSelector((state: { business: { data: Business[] } }) => state.business);
    const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
    const businessNameFromURL = params.slug[0]; // Trim the URL parameter

    useEffect(() => {
        dispatch(getBusinesses()); // Fetch all businesses if not already fetched
    }, [dispatch]);

    useEffect(() => {
        // Find the business details based on the domain name
        if (businessesState.data && Array.isArray(businessesState.data)) {
            const foundBusiness = businessesState.data.find((business: Business) => business.name.trim() === businessNameFromURL);
            if (foundBusiness) {
                setSelectedBusiness(foundBusiness);
                console.log("Business found with name:", businessNameFromURL);
                console.log("Business data with name:", foundBusiness);

            } else {
                console.log("Business not found with name:", businessNameFromURL);
            }
        }
    }, [businessNameFromURL, businessesState.data]);

    return (

        <>
            <div className="flex flex-row h-screen bg-lightbg dark:bg-darkbg">
                <main className="w-full ">
                    <div className="p-10">
                        {selectedBusiness ? (
                            <div className='flex flex-col justify-center items-center bg-gray-200 rounded-xl'>
                                <div className='text-2xl font-bold p-5'>{selectedBusiness.name.toUpperCase()}</div>
                                <div>{selectedBusiness.description}</div>
                            </div>
                        ) : (
                            <p>Loading.. {params.slug}</p>
                        )}
                    </div>
                </main>
            </div>
        </>
    );


};

export default Page;
