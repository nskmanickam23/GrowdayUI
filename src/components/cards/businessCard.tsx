import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { acitvateAndDeactivateBusiness } from '@/application/reducers/business-reducer';
import Link from 'next/link';
import { PencilIcon } from 'lucide-react';

interface BusinessCardProps {
  id: string;
  name: string;
  description: string;
  domain_url: string;
  link: string;
  status: boolean;
  address: string;
  onStatusToggle: () => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  id,
  name,
  description,
  domain_url,
  link,
  status,
  address,
  onStatusToggle,
}) => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleStatusToggle = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  const handleChangeStatus = (newStatus: boolean) => {
    const newData = {
      name: name,
      updated_by: "user_id", // Replace "user_id" with the actual user ID
      status: newStatus, // Set the new status
    };

    dispatch(acitvateAndDeactivateBusiness(newData));
    setMenuOpen(false); // Close the menu after changing status
    onStatusToggle(); // Trigger the onStatusToggle function
  };

  return (
    <a href={`/${name}`} target="_blank" rel="noopener noreferrer" className="group mr-5 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="relative">
        <div className="py-3 px-2 h-32 bg-palatteFour dark:bg-darkbg dark:border dark:border-darkborder rounded-xl flex flex-col shadow-[rgba(0,_0,_0,_0.03)_0px_0px_16px]">
          <div className="flex p-4 flex-col pb-[18px] relative select-none">
            <div>
              <h2 className="font-bold">{name}</h2>
              <div className="absolute top-0 right-1 px-[1px]">
                <div className="flex flex-row items-center justify-center gap-3">

                  <button onClick={handleStatusToggle}
                    className={`${status ? 'bg-lime-100 text-lime-500' : 'bg-orange-100 text-orange-500'
                      } text-[12px] px-3 rounded-full cursor-pointer`}
                    ref={menuRef}
                  >
                    {status ? 'Active' : 'Inactive'}
                  </button>
                  {/* {menuOpen && (
                    <div className="absolute select-none right-0 mt-1 bg-white border rounded-md shadow-md">
                      <button onClick={() => handleChangeStatus(!status)} className=" text-[12px] inline-block  text-center">
                        {status ? 'Set Inactive' : 'Set Active'}
                      </button>
                    </div>
                  )} */}

                  <div className='rounded-full bg-gray-200 p-[3px]'>
                    <Link href={link}>
                      <PencilIcon className=' w-3 h-3' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-[5%] py-1 bg-gray-100 rounded-full  transform transition-transform duration-300 ease-in-out hover:scale-110  text-[12px]">
              <span className='text-[13px]  font-bold  pl-3 '> Domain : </span>
              {domain_url}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BusinessCard;
