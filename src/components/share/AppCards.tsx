import React from 'react';
import Image from 'next/image';
import { TApp } from '@/types/apps.type';
import Link from 'next/link';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FaFire } from 'react-icons/fa';
import { IoIosStarOutline } from 'react-icons/io';

type TAppProps = {
    app: TApp;
};

const AppCards = ({ app }: TAppProps) => {
    return (
        <Link href={`/${app.id}`} >
        <div className="card overflow-hidden rounded-xl  bg-[#0b0f17] text-white shadow-none transition duration-300 hover:border-[#ccff00]/30">

            
                    <div className="relative  w-full overflow-hidden">
                        <Image
                            src={app.image}
                            alt={app.name}
                            width={500}
                            height={500}
                            className='w-full h-84'
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 23vw"
                        />
                        {/* <Image src={app.image} fill alt={app.name} /> */}
                    </div>

                    {/* Card Content */}
                    <div className="card-body gap-3 p-4">

                        {/* Muscle Array*/}
                        <div className="flex gap-2">
                            {app.muscleGroups.map((muscle) => (
                                <button key={muscle} className="rounded-2xl bg-[#ccff00] px-2 text-[9px] font-bold uppercase text-black">
                                    {muscle} </button>
                            ))}
                        </div>

                        <h2 className="text-sm font-extrabold uppercase tracking-wide text-white"> {app.name} </h2>
                        <p className="text-[10px] text-gray-400"> {app.equipment} </p>

                        {/* line */}
                        <div className="border-t border-white/10"></div>

                        {/* Workout */}
                        <div className="mt-1 flex gap-1 text-xs text-gray-400">
                            <p className="flex gap-1 "><MdOutlineWatchLater className='text-[#b8e600]' /> {app.duration} min </p>
                            <p className="flex gap-1 "><FaFire className='text-[#b8e600]'/> {app.caloriesBurned} kcal</p>
                            <p className="flex gap-1 "><IoIosStarOutline className='text-[#b8e600]' /> {app.rating}</p>
                        </div>

                        

                    </div>
                </div>              
                </Link>
        
    );
};

export default AppCards;