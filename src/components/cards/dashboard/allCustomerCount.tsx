import Link from 'next/link';
import React from 'react'

const AllCustomerCount = () => {
    return (
        <div className="group transform transition-transform duration-300 ease-in-out hover:scale-105 mr-5">
            <Link href={'dashboard/customers'}>
                <div className='p-5  h-44 bg-palatteFour dark:bg-darkbg dark:border dark:border-darkborder rounded-xl flex flex-col shadow-[rgba(0,_0,_0,_0.03)_0px_0px_16px] '>
                    <div className="flex flex-col pb-10">
                        <div className='px-1 text-md  font-black'>
                            Total No of Customers
                        </div>
                        <div className='px-1 md:text-2xl font-black'>
                            1721
                        </div>
                    </div>
                    <div className='text-green-900 text-sm font-normal flex overflow-hidden'>
                        <h1><span className='text-blue-700'>1400+ Active customers</span> </h1>
                    </div>
                </div>
            </Link>
        
        </div>
    )
}

export default AllCustomerCount;
