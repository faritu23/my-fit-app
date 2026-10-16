import { TApp } from '@/types/apps.type';
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';

type TAppContext = {
    plans: TApp[];
    setPlans: React.Dispatch<React.SetStateAction<TApp[]>>;
    saved:TApp[];
    setSaved: React.Dispatch<React.SetStateAction<TApp[]>>;
};

export const AppContext = createContext<TAppContext>({
    plans: [],
    setPlans: () => {},
    saved: [],
    setSaved: () => {},
});

const AppProvider = ({child}:{child:ReactNode}) => {
    const [plans,setPlans]= useState<TApp[]>([]);
    const [saved,setSaved]=useState<TApp[]>([]);

    const shareApp = {
        plans,
        setPlans,
        saved,
        setSaved,
    };
    return (
        <div>
            <AppContext.Provider value={shareApp}>
            {child}
            </AppContext.Provider>
        </div>
    );
};

export default AppProvider;