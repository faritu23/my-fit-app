'use client';
import PlanSavedCard from '@/components/share/PlanSavedCard';
import SavedCard from '@/components/share/SaveCard';
import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import Link from 'next/link';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

const MyPlanPage = () => {
    const {plans,setPlans,planCalories,planMinutes}=useContext(AppContext);
    const {saved,setSaved,savedCalories,savedMinutes}=useContext(AppContext);
    const {saveActive,setSaveActive} =useContext(AppContext);
    const {planActive,setPlanActive} =useContext(AppContext);


    const handleSortByDuration = () => {
        toast.success("Sorted");
        const sortedPlans = [...plans].sort((a, b) => a.duration - b.duration);
        setPlans(sortedPlans);
        const sortedSaved = [...saved].sort((a, b) => a.duration - b.duration);
        setSaved(sortedSaved);
    };
    const handleSortByCalories = () => {
        toast.success("Sorted");
        const sortedPlans = [...plans].sort((a, b) => a.caloriesBurned - b.caloriesBurned);
        setPlans(sortedPlans);
        const sortedSaved = [...saved].sort((a, b) => a.caloriesBurned - b.caloriesBurned);
        setSaved(sortedSaved);
    };
    const handleSortByRating = () => {
        toast.success("Sorted");
        const sortedPlans = [...plans].sort((a, b) => a.rating - b.rating);
        setPlans(sortedPlans);
        const sortedSaved = [...saved].sort((a, b) => a.rating - b.rating);
        setSaved(sortedSaved);
    };

    return (
        <div>
            <div className='container mx-auto py-6'>
                <h2 className='text-4xl font-bold mb-4'>MY PLAN</h2>
                <p className='text-gray-500 text-sm'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
                
                {
                    saveActive?<div className='flex justify-between items-center bg-[#0b0f17] p-8 rounded-lg shadow-md container mx-auto'>
                            <div >
                                <p className='text-gray-500'>Exercises</p>
                                <p className='text-3xl font-bold'>{saved.length}</p>
                            </div>
                            <div>
                                <p className='text-gray-500'>Minutes</p>
                                <p className='text-3xl font-bold'>{savedMinutes}</p>
                            </div>
                            <div>
                                <p className='text-gray-500'>Calories</p>
                                <p className='text-3xl font-bold'>{savedCalories}</p>
                            </div>
                        </div>
                    :
                        <div className='flex justify-between items-center bg-[#0b0f17] p-8 rounded-lg shadow-md container mx-auto'>
                            <div >
                                <p className='text-gray-500'>Exercises</p>
                                <p className='text-3xl font-bold'>{plans.length}</p>
                            </div>
                            <div>
                                <p className='text-gray-500'>Minutes</p>
                                <p className='text-3xl font-bold'>{planMinutes}</p>
                            </div>
                            <div>
                                <p className='text-gray-500'>Calories</p>
                                <p className='text-3xl font-bold'>{planCalories}</p>
                            </div>
                        </div>
                        
                }
                <div>

                </div>

                <div className='flex items-center justify-between container mx-auto my-6 py-6'>
                
                    {/* Left  */}
                    <div className="flex bg-[#12161f] border border-[#1e2430] p-1.5 rounded-2xl gap-1">
                        <button
                            onClick={() => {
                                setPlanActive(true);
                                setSaveActive(false);
                            }}
                            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                                planActive ? "bg-[#C2F10D] text-black font-bold" : "text-gray-400 hover:text-white"
                            }`}
                        >
                            Today&apos;s Plan
                        </button>

                        <button
                            onClick={() => {
                                setPlanActive(false);
                                setSaveActive(true);
                            }}
                            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                                !planActive ? "bg-[#C2F10D] text-black font-bold" : "text-gray-400 hover:text-white"
                            }`}
                        >
                            Saved
                        </button>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-3">
                        <label htmlFor="sortSelect" className="text-sm text-gray-400 font-medium">
                            Sort By
                        </label>
                        <div className="relative">
                            <select id="sortSelect" 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === 'duration') handleSortByDuration(); 
                                    else if (value === 'calories') handleSortByCalories();
                                    else if (value === 'rating') handleSortByRating();
                                }}
                                className="bg-[#121824] border border-gray-800 text-gray-200 text-sm rounded-xl px-4 py-2 pr-8 focus:outline-none focus:border-gray-700 cursor-pointer appearance-none"
                            >
                                <option value="duration">Duration</option>
                                <option value="calories">Calories</option>
                                <option value="rating">Rating</option>
                            </select>
                            
                            
                        </div>
                    </div>

                </div>



             {/* data display  */}
                {
                    planActive?(

                        plans.length>0?(
                            <div className='grid gap-2'>{
                            plans.map((app:TApp,idx:number)=>{
                                return <PlanSavedCard key={idx} app={app}></PlanSavedCard>;
                            })
                            }
                            </div>
                        )
                        :
                        ( 
                            <div className="hero container mx-auto bg-[#0b0f17] rounded-2xl min-h-svh">
                                <div className="gap-2 text-center">
                                    <p className='text-center text-3xl font-bold '>NOTHING HERE YET</p>
                                    <p className='text-gray-500 text-center mt-1'>Browse the library and add a lift to get today moving.</p>

                                    <Link href={'/'} className='inline-block mt-1'>
                                      <button className='bg-[#C2F10D] text-black btn rounded-2xl '> Go to workouts </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    ):(
                        saved.length>0?(
                            <div className='grid gap-2'>{
                            
                            saved.map((app:TApp,idx:number)=>{
                                return <SavedCard key={idx} app={app}></SavedCard>;
                            })
                            }
                            </div>
                        )
                        :
                        (
                            // <div className='p-15 container flex flex-col items-center justify-center mx-auto gap-2'>
                            // <p className='text-center text-3xl font-bold'>NOTHING HERE YET</p>
                            // <p className='text-gray-500 text-center'>Browse the library and add a lift to get today moving.</p>

                            // <Link href={'/'} className='inline-block'>
                            //     <button className='bg-[#C2F10D] text-black btn rounded-2xl '> Go to workouts </button>
                            // </Link>
                            // </div>

                            <div className="hero container mx-auto bg-[#0b0f17] rounded-2xl min-h-svh">
                                <div className="gap-2 text-center">
                                    <p className='text-center text-3xl font-bold'>NOTHING HERE YET</p>
                                    <p className='text-gray-500 text-center mt-1'>Browse the library and add a lift to get today moving.</p>

                                    <Link href={'/'} className='inline-block mt-1'>
                                      <button className='bg-[#C2F10D] text-black btn rounded-2xl '> Go to workouts </button>
                                    </Link>
                                </div>
                            </div>
                        )

                    )

                }
            

            
        </div>

        
    );
};

export default MyPlanPage;