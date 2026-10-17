'use client';
import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

const PlanButton = ({app}:{app:TApp}) => {
    const {plans,setPlans}=useContext(AppContext);
    const {planCalories ,setPlanCalories}=useContext(AppContext);
    const {planMinutes ,setPlanMinutes}=useContext(AppContext);
    const {planActive,setPlanActive}=useContext(AppContext)

    const handleColor=()=>{
        
    }
    const handleAddToPlans=()=>{
        // Check if the app is already in the plans
        const isAlreadyInPlan = plans.some((item) => Number(item.id) === Number(app.id));
        console.log(isAlreadyInPlan);
        if(!isAlreadyInPlan)
        {
            toast.success("Add to plans");

            setPlans([...plans,app]);
            console.log('Current plans:', plans ,plans.length);
            setPlanCalories(planCalories+app.caloriesBurned);
            setPlanMinutes(planMinutes+app.duration);
        }
        else{
            toast.error("Already in plan")
        }
        setPlanActive(true);
    }
    
    return (
       <div>
           <button className="btn rounded-[10px] px-5" onClick={handleAddToPlans}> Add to todays plan</button>
       </div>
        
    );
};

export default PlanButton;