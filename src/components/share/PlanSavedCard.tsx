import { AppContext } from '@/context/AppContext';
import { TApp } from '@/types/apps.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

const PlanSavedCard = ({ app }: {app: TApp}) => {
    const {
        plans,
        setPlans,
        saved,
        setSaved,
        planActive,
        setPlanCalories,
        setPlanMinutes,
        setSavedCalories,
        setSavedMinutes,
    } = useContext(AppContext);


    const handleDelete = () => {
    if (planActive) {
        const updatedPlans = plans.filter((item) => Number(item.id) !== Number(app.id));
        setPlans(updatedPlans);
        setPlanCalories((sum) =>  sum - app.caloriesBurned);
        setPlanMinutes((sum) =>  sum - app.duration );

        toast.success("Removed from Today's Plan");
    } else {
        const updatedSaved = saved.filter((item) => Number(item.id) !== Number(app.id));
        setSaved(updatedSaved);
        setSavedCalories((sum) => sum - app.caloriesBurned );
        setSavedMinutes((sum) => sum - app.duration );
        toast.success("Removed from Saved");
    }
    }
    return (
        <div className="card w-full min-w-0 flex-col items-start justify-between gap-4 rounded-2xl border border-gray-800/80 bg-[#0b0f17] p-3 text-white shadow-md sm:p-4 md:flex-row md:items-center">
            
            {/* Left Side */}
            <div className="flex w-full min-w-0 items-center gap-3 sm:gap-4 md:w-auto md:flex-1">
                <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-gray-800 bg-gray-900 sm:h-20 sm:w-28">
                    <Image
                        src={app.image}
                        alt={app.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex min-w-0 flex-col gap-1">
                    <h2 className="break-words text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">{app.name}</h2>
                    <p className="break-words text-xs text-gray-400">{app.equipment}</p>
                    
                    {/* Stats Row */}
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
                        <p className="flex items-center gap-1 whitespace-nowrap"><span>⏱</span> {app.duration} min </p>
                        <p className="flex items-center gap-1 whitespace-nowrap"><span>🔥</span> {app.caloriesBurned} kcal</p>
                        <p className="flex items-center gap-1 whitespace-nowrap"><span>☆</span> {app.rating}</p>
                    </div>
                </div>
            </div>

            {/* Right Side: Action Buttons & Close Icon */}
            <div className="flex w-full flex-wrap items-center justify-end gap-2 sm:gap-3 md:w-auto md:flex-nowrap">
                {/* View Details Button */}
                <Link href={`/${app.id}`} className="flex-1 whitespace-nowrap rounded-xl border border-gray-700/80 px-3 py-2 text-center text-xs font-semibold text-gray-300 transition-all hover:bg-gray-800 sm:flex-none sm:px-4">
                    View Details
                </Link>

                {/* Mark as Done Button */}
                <button className="flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-[#ccff00] px-3 py-2 text-xs font-bold text-black transition-all hover:bg-[#b8e600] sm:flex-none sm:px-4">
                    <span>✓</span> Mark as Done
                </button>

                {/* Remove / Close Icon */}

                <button className="text-gray-500 hover:text-white p-1 text-sm font-bold transition-colors"
                 onClick={handleDelete}
                 aria-label={`Remove ${app.name}`}
                >
                    ✕
                </button>
            </div>

        </div>
    );
};

export default PlanSavedCard;