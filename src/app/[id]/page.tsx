import { getAllData } from '@/lib/apps';
import { TApp } from '@/types/apps.type';
import React from 'react';

type AppDetailsProps={
    params:{
        id:string;
    }
}
const AppDetailsPage = async({params}:AppDetailsProps) => {
    
    const {id}=await params;
    const data=await getAllData();
    const app=data.find((app:TApp)=>app.id===Number(id))
    console.log(id);

    return (
        <div>
            app {id};
            
        </div>
    );
};

export default AppDetailsPage;