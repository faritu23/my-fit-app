import { getAllData } from '@/lib/apps';
import { TApp } from '@/types/apps.type';
import Image from 'next/image';
import React from 'react';

type AppDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

const AppDetailsPage = async ({ params }: AppDetailsProps) => {
  const { id } = await params;
  const data = await getAllData();
  const appData:TApp = data.find((app: TApp) => app.id === Number(id));
  
  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-200 p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Side — Visual/Media */}
        <div className="relative w-full h-[450px] lg:h-[600px] rounded-2xl overflow-hidden">
          <Image src={appData.image} alt={appData.name} fill/>
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-6">
          {/* title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase"> {appData.name} </h1>
            <p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed">{appData.description} </p>
          </div>

          {/* Category Tags */}
          <div className="flex gap-2">
            {appData.muscleGroups.map((muscle:string) => (
                <div key={muscle} className="rounded-2xl bg-[#ccff00] px-3 py-1 text-sm  font-bold uppercase text-black">
                {muscle} </div>
            ))}
          </div>

         {/* Key Specs Table Panel */}
          <div className="bg-[#121824] rounded-2xl p-5 border border-gray-800/60 divide-y divide-gray-800/80">
              
                <div className="flex justify-between items-center py-2.5 first:pt-0 last:pb-0 text-xs md:text-sm">
                    <span className="text-gray-400 uppercase tracking-wider font-semibold text-[11px]">Equipment</span>
                    <span className="text-gray-200 font-medium">{appData.equipment}</span>
                </div>
                <div className="flex justify-between items-center py-2.5 first:pt-0 last:pb-0 text-xs md:text-sm">
                    <span className="text-gray-400 uppercase tracking-wider font-semibold text-[11px]">difficulty</span>
                    <span className="text-gray-200 font-medium">{appData.difficulty}</span>
                </div>
                <div className="flex justify-between items-center py-2.5 first:pt-0 last:pb-0 text-xs md:text-sm">
                    <span className="text-gray-400 uppercase tracking-wider font-semibold text-[11px]">duration</span>
                    <span className="text-gray-200 font-medium">{appData.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2.5 first:pt-0 last:pb-0 text-xs md:text-sm">
                    <span className="text-gray-400 uppercase tracking-wider font-semibold text-[11px]">caloriesBurned</span>
                    <span className="text-gray-200 font-medium">{appData.caloriesBurned}</span>
                </div>
                <div className="flex justify-between items-center py-2.5 first:pt-0 last:pb-0 text-xs md:text-sm">
                    <span className="text-gray-400 uppercase tracking-wider font-semibold text-[11px]">sets</span>
                    <span className="text-gray-200 font-medium">{appData.sets}</span>
                </div>
                <div className="flex justify-between items-center py-2.5 first:pt-0 last:pb-0 text-xs md:text-sm">
                    <span className="text-gray-400 uppercase tracking-wider font-semibold text-[11px]">rating</span>
                    <span className="text-gray-200 font-medium">{appData.rating}</span>
                </div>
            
          </div>



          {/* Instructions Section */}
          <div>
            <h2 className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-3">INSTRUCTIONS</h2>
            <ol className="space-y-2.5 text-xs md:text-sm text-gray-300">
              {appData.instructions.map((step, index) => (
                <li key={index} className="flex gap-2 leading-relaxed">
                  <span className="text-gray-400 font-medium">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="btn rounded-[10px] px-5"> Add to todays plan</button>
            <button className="btn rounded-[10px] px-5"> Save for later</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AppDetailsPage;