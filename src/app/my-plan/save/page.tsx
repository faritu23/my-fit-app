'use client';
import PlanSavedCard from '@/components/share/PlanSavedCard';
import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import React, { useContext } from 'react';

const SavePage = () => {
    const {saved}=useContext(AppContext)
    return (
        <div>
            {/* data display  */}
                {
                    saved.length>0?(
                        <div className='container mx-auto grid grid-cols-1 gap-3 px-4 sm:px-6'>{
                        
                        saved.map((app:TApp,idx:number)=>{
                        
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

export default SavePage;