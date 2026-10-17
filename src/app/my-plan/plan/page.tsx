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
                        <div className='grid grid-cols-4 gap-2 container mx-auto'>{

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