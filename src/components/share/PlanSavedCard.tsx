import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import AppCards from './AppCards';



const PlanSavedCard = () => {
    const {plans}=useContext(AppContext);

    return (
            
        <div>
            {/* data display  */}
                {
                    plans.length>0?(
                        <div className='grid grid-cols-4 gap-2'>{
                        
                        plans.map((app:TApp,idx:number)=>{
                        

                            return <AppCards key={idx} app={app}></AppCards>;
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

export default PlanSavedCard;