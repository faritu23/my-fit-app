'use client';
import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

const SavedButton = ({app}:{app:TApp}) => {
    const {saved,setSaved}=useContext(AppContext);
    const {savedCalories ,setSavedCalories}=useContext(AppContext);
    const {savedMinutes ,setSavedMinutes}=useContext(AppContext);
    const {saveActive,setSaveActive}=useContext(AppContext);
    const isAlreadyInSaved = saved.some((item) => Number(item.id) === Number(app.id));

    const handleAddToSaved=()=>{
        // Check if the app is already in the save
        console.log(isAlreadyInSaved);
        if(!isAlreadyInSaved)
        {
            toast.success("Saved for later!");
            setSaved([...saved,app]);
            console.log('Current saved:', saved, saved.length);
            setSavedCalories(savedCalories+app.caloriesBurned);
            setSavedMinutes(savedMinutes+app.duration);
        }
        else{
            toast.error("Aready saved");
        }
        setSaveActive(true);

    }
    
    return (
    //    <div>
    //        <button className="btn rounded-[10px] px-5" onClick={handleAddToSaved}> Saved for later</button>
    //    </div>
        <div>
           <button 
               onClick={handleAddToSaved}
               className={`btn rounded-[10px] px-5 border-none font-bold ${
                   isAlreadyInSaved ? 'bg-[#C2F10D] text-black hover:bg-[#b0d80b]' : 'bg-transparent text-white border border-gray-700 hover:bg-gray-800'
               }`}
           >
              Saved for later
           </button>
       </div>
        
    );
};

export default SavedButton;