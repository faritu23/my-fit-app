import { TApp } from '@/types/apps.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PlanSavedCard = ({ app }: {app: TApp}) => {
    return (
        <div className=" container mx-auto bg-[#0b0f17] border border-gray-800/80 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-white shadow-md w-full">
            
            {/* Left Side */}
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative w-24 h-16 sm:w-28 sm:h-18 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0 border border-gray-800">
                    <Image
                        src={app.image}
                        alt={app.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-white">{app.name}</h2>
                    <p className="text-xs text-gray-400">{app.equipment}</p>
                    
                    {/* Stats Row */}
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                        <p className="flex items-center gap-1"><span>⏱</span> {app.duration} min </p>
                        <p className="flex items-center gap-1"><span>🔥</span> {app.caloriesBurned} kcal</p>
                        <p className="flex items-center gap-1"><span>☆</span> {app.rating}</p>
                    </div>
                </div>
            </div>

            {/* Right Side: Action Buttons & Close Icon */}
            <div className="container flex items-center gap-3 w-full md:w-auto justify-end">
                {/* View Details Button */}
                <Link href={`/${app.id}`}>
                    <button className="px-4 py-2 bg-transparent hover:bg-gray-800 text-gray-300 border border-gray-700/80 font-semibold rounded-xl text-xs transition-all">
                        View Details
                    </button>
                </Link>

                {/* Mark as Done Button */}
                <button className="px-4 py-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all">
                    <span>✓</span> Mark as Done
                </button>

                {/* Remove / Close Icon */}
                <button className="text-gray-500 hover:text-white p-1 text-sm font-bold transition-colors">
                    ✕
                </button>
            </div>

        </div>
    );
};

export default PlanSavedCard;