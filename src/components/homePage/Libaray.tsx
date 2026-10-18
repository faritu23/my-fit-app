import { TApp } from '@/types/apps.type';
import React from 'react';
import AppCard from '../share/AppCards';
import AppCards from '../share/AppCards';
import { getAllData } from '@/lib/apps';


const Libaray = async () => {
    const data=await getAllData();
    console.log(data);

    return (
        <div >
            <div className='container mx-auto py-8'>
                <h2 className='text-3xl font-bold'>THE LIBRARY</h2>
                <p className='text-gray-500 text-sm'>Twelve lifts covering every major muscle group.</p>
            </div>

            {/* display data  */}
            <div className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 container mx-auto'>
                {
                    data.map((app:TApp,id:number)=>{
                        return <AppCards key={id} app={app}></AppCards>
                    })
                }
            </div>
        </div>
    );
};

export default Libaray;