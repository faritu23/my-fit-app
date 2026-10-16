'use client';
import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import React, { useContext } from 'react';
import PlanSavedCard from '../share/PlanSavedCard';

const PlanButton = ({app}:{app:TApp}) => {
    const {plans,setPlans}=useContext(AppContext);

    const handleAddToPlans=()=>{
        // Check if the app is already in the plans
        console.log('Current plans:', plans);
        setPlans([...plans,app]);
    }
    
    return (
       
             <button className="btn rounded-[10px] px-5" onClick={handleAddToPlans}> Add to todays plan</button>
        
    );
};

export default PlanButton;