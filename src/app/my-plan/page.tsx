'use client'
import AppCards from '@/components/share/AppCards';
import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import Link from 'next/link';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const {plans}=useContext(AppContext);
    return (
        <div>
            <div className='container mx-auto py-6'>
                <h2 className='text-4xl font-bold mb-4'>MY PLAN</h2>
                <p className='text-gray-500 text-sm'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='flex justify-between items-center bg-[#0b0f17] p-8 rounded-lg shadow-md container mx-auto'>
                <div >
                    <p className='text-gray-500'>Exercises</p>
                    <p className='text-3xl font-bold'>0</p>
                </div>
                <div>
                    <p className='text-gray-500'>Minutes</p>
                    <p className='text-3xl font-bold'>0</p>
                </div>
                <div>
                    <p className='text-gray-500'>Calories</p>
                    <p className='text-3xl font-bold'>0</p>
                </div>
            </div>

            <div className='flex bg-[#12161f] border border-[#1e2430] p-1.5 rounded-2xl w-max gap-1 container mx-auto mt-6'>
                <Link href="#">
                    <button className="px-5 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-all hover:border-1 hover:border-[#ccff00]">
                        Today&apos;s Plan
                    </button>
                </Link>
                <Link href="#">
                    <button className="px-5 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-all hover:border-1 hover:border-[#ccff00]">
                        Saved
                    </button>
                </Link>
            </div>


             {/* data display  */}
                {
                    plans.length>0?(
                        <div className='grid grid-cols-4 gap-2'>{
                        
                        plans.map((app:TApp,idx:number)=>{
                        return <AppCards key={idx} app={app}></AppCards>;
                        })
                        }
                        </div>
                    )
                    :
                    (
                        <p className='text-center text-gray-500'>No installed yet..</p>
                    )
                }
            

            
        </div>

        
    );
};

export default MyPlanPage;