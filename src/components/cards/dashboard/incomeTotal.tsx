import React from 'react';
import { HandCoinsIcon } from 'lucide-react';

interface IncomeTotalProps {
    total?: string;
}

const IncomeTotal: React.FC<IncomeTotalProps> = ({ total }) => {
    return (
        <div>
            <div className="group transform transition-transform duration-300 ease-in-out hover:scale-105 mr-5 ">
                <div className='p-5  h-44 bg-palatteFour dark:bg-darkbg dark:border dark:border-darkborder rounded-xl flex flex-col shadow-[rgba(0,_0,_0,_0.03)_0px_0px_16px] '>
                        <div className="flex flex-col pb-10">
                            <div className='px-1 text-md  font-black'>
                                Total Income
                            </div>
                            <div className='px-1 md:text-2xl font-black'>
                                $17055 +
                            </div>
                        </div>
                        <div className='text-green-900 text-sm font-normal flex overflow-hidden'>
                            <h1><span className='text-blue-700'>68% Growth 📈</span>in the last 3 weeks</h1>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default IncomeTotal;
