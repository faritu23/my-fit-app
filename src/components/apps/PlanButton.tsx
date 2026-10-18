'use client';
import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaRegCalendarPlus } from "react-icons/fa";

const PlanButton = ({app}:{app:TApp}) => {
    const {plans,setPlans}=useContext(AppContext);
    const {planCalories ,setPlanCalories}=useContext(AppContext);
    const {planMinutes ,setPlanMinutes}=useContext(AppContext);
    const {planActive,setPlanActive}=useContext(AppContext)
    const isAlreadyInPlan = plans.some((item) => Number(item.id) === Number(app.id));
    const handleAddToPlans=()=>{
        // Check if the app is already in the plans
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
           <button 
               onClick={handleAddToPlans}
               className={`btn rounded-[10px] px-5 border-none font-bold ${
                   isAlreadyInPlan ? 'bg-[#C2F10D] text-black hover:bg-[#b0d80b]' : 'bg-transparent text-white border border-gray-700 hover:bg-gray-800'
               }`}
           >
            <FaRegCalendarPlus />
              Add to today's plan
           </button>
       </div>
        
    );
};

export default PlanButton;