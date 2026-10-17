'use client';
import PlanSavedCard from '@/components/share/PlanSavedCard';
import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import React, { useContext } from 'react';

const PlanPage = () => {
    const {plans}=useContext(AppContext);
    return (
        <div>
            {/* data display  */}
                {
                    plans.length>0?(
                        <div className='container mx-auto grid grid-cols-1 gap-3 px-4 sm:px-6'>{

                        plans.map((app:TApp,idx:number)=>{
                            return <PlanSavedCard key={idx} app={app}></PlanSavedCard>;
                        })
                        }
                        </div>
                ):(
                        <p className='text-center text-gray-500'>No installed yet..</p>
                  )
                }

        
        
        </div>
    );
};

export default PlanPage;