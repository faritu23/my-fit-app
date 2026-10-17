'use client';
import { TApp } from '@/types/apps.type';
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';

type TAppContext = {
    plans: TApp[];
    setPlans: React.Dispatch<React.SetStateAction<TApp[]>>;
    saved: TApp[];
    setSaved: React.Dispatch<React.SetStateAction<TApp[]>>;
    planCalories: number;
    setPlanCalories: React.Dispatch<React.SetStateAction<number>>;
    planMinutes: number;
    setPlanMinutes: React.Dispatch<React.SetStateAction<number>>;
    savedCalories: number;
    setSavedCalories: React.Dispatch<React.SetStateAction<number>>;
    savedMinutes: number;
    setSavedMinutes: React.Dispatch<React.SetStateAction<number>>;
    saveActive: boolean;
    setSaveActive: React.Dispatch<React.SetStateAction<boolean>>;
    planActive: boolean;
    setPlanActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<TAppContext>({
    plans: [],
    setPlans: () => {},
    saved: [],
    setSaved: () => {},
    planCalories: 0,
    setPlanCalories: () => {}, 
    planMinutes: 0,
    setPlanMinutes: () => {},
    savedCalories: 0,
    setSavedCalories: () => {},
    savedMinutes: 0,
    setSavedMinutes: () => {},
    saveActive: false,
    setSaveActive: () => {},
    planActive: true,
    setPlanActive: () => {},
});

const AppProvider = ({children}:{children:ReactNode}) => {
    const [plans,setPlans]= useState<TApp[]>([]);
    const [saved,setSaved]=useState<TApp[]>([]);

    const [planCalories ,setPlanCalories]=useState<number>(0);
    const [planMinutes ,setPlanMinutes]=useState<number>(0);

    const [savedCalories ,setSavedCalories]=useState<number>(0);
    const [savedMinutes ,setSavedMinutes]=useState<number>(0);

    const [saveActive,setSaveActive]=useState<boolean>(false);
    const [planActive,setPlanActive]=useState<boolean>(true);

    // const [sortDuration,setSortDuration]= useState<TApp[]>([]);


    const shareApp = {
        plans,
        setPlans,
        saved,
        setSaved,
        planCalories ,
        setPlanCalories,
        planMinutes ,
        setPlanMinutes,
        savedCalories ,
        setSavedCalories,
        savedMinutes ,
        setSavedMinutes,
        saveActive,
        setSaveActive,
        planActive,
        setPlanActive,
    };
    return (
        <div>
            <AppContext.Provider value={shareApp}>
            {children}
            </AppContext.Provider>
        </div>
    );
};

export default AppProvider;