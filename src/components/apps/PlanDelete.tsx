import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import React, { useContext } from 'react';

const PlanDelete = ({app}:{app:TApp}) => {
    const {plans,setPlans}=useContext(AppContext);
    
    return (
        <div>
            
        </div>
    );
};

export default PlanDelete;