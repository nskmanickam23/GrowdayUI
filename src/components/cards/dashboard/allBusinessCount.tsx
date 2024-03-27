import Link from 'next/link'
import React from 'react'

const AllBusinessCount = () => {
    return (
        <div className="group transform transition-transform duration-300 ease-in-out hover:scale-105 mr-5 ">
            <Link href={'dashboard/business'}>
                <div className='p-5 h-44 bg-palatteFour dark:bg-darkbg dark:border dark:border-darkborder rounded-xl flex flex-col shadow-[rgba(0,_0,_0,_0.03)_0px_0px_16px] '>
                    <div className="flex flex-col pb-10">
                        <div className='px-1 text-md  font-black'>
                            Total No of businesses
                        </div>
                        <div className='px-1 md:text-2xl font-black'>
                            17
                        </div>
                    </div>
                    <div className='text-green-900 text-sm font-normal flex overflow-hidden'>
                        <h1>Tourism, Business, Bakery, Flower shop<span className='text-blue-700'>+14 more</span> </h1>
                    </div>
             

                </div>
            </Link>
        </div>
    )
}

export default AllBusinessCount
